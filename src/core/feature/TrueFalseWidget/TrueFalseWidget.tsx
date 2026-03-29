import { useState } from 'react';
import { Box, Collapse, Fade, Typography } from '@mui/material';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';

import type { TrueFalseTask, TrueFalseAnswerPayload } from './types';
import styles from './TrueFalseWidget.module.scss';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import CardAnswer from './CardAnswer/CardAnswer';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import Timer from './Timer/Timer';
import { difficultySecondsConfig } from '@/core/configs/trueFalseWidget.config';
import { useLocale } from '@/core/i18n/useLocal';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';
import type { QuizAnswer, QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';

type Answer = {
  questionId: number;
  payload: boolean;
  isTimeout?: boolean;
};

function TrueFalseWidget({
  data,
  onSubmit,
}: {
  data: TrueFalseTask;
  onSubmit?: <T extends UserAnswerPayload>(quizResults: QuizResults<T>) => void;
}) {
  const locale = useLocale();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswered] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { questions, difficulty, id } = data;
  const { correct, statement, explanation } = questions[currentIndex];

  const answered = selectedAnswer !== null;
  const isSavedAnswer = answers[currentIndex] !== undefined;
  const questionSecondsLimit = difficultySecondsConfig[difficulty] || 10;
  const isTimeout = answers[currentIndex]?.isTimeout ?? false;

  function saveAnswer(selectedAnswer: boolean, isTimeout = false) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        questionId: questions[currentIndex].id,
        payload: selectedAnswer,
        isTimeout,
      };
      return updated;
    });
  }

  function handleAnswer(selected: boolean) {
    setSelectedAnswered(selected);
    saveAnswer(selected);
  }

  const handleTimeout = () => {
    setSelectedAnswered(!correct);
    saveAnswer(!correct, true);
  };

  const goNext = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next);
    setSelectedAnswered(answers[next]?.payload ?? null);
  };

  const goBack = () => {
    if (currentIndex === 0) return;
    const prev = currentIndex - 1;
    setCurrentIndex(prev);
    setSelectedAnswered(answers[prev].payload);
  };

  return (
    <div className={styles.container}>
      <QuizProgressBar currentQuestionNumber={currentIndex + 1} questionsCount={questions.length} />

      <Box key={currentIndex} className={styles.main}>
        {!isSavedAnswer && (
          <Timer
            className={styles.mainTimer}
            duration={questionSecondsLimit}
            onExpire={handleTimeout}
            key={currentIndex}
          />
        )}

        <Typography variant="h3" lineHeight={1.6} fontSize={18}>
          {statement[locale]}
        </Typography>

        <section className={styles.answers}>
          <CardAnswer
            cardType={true}
            selectedAnswer={selectedAnswer}
            onSelectedAnswered={handleAnswer}
            correctStatement={correct}
            isTimeout={isTimeout}
          />
          <CardAnswer
            cardType={false}
            selectedAnswer={selectedAnswer}
            onSelectedAnswered={handleAnswer}
            correctStatement={correct}
            isTimeout={isTimeout}
          />
        </section>

        <Collapse in={answered} timeout={300}>
          <Box sx={{ pb: 1 }}>
            <Fade in={answered} timeout={500} style={{ transitionDelay: '400ms' }}>
              <Typography>
                <TipsAndUpdatesTwoToneIcon sx={{ translate: '0 3px' }} /> {explanation[locale]}
              </Typography>
            </Fade>
          </Box>
        </Collapse>
      </Box>

      <QuizNavigation
        currentQuestionNumber={currentIndex}
        increaseQuestionNumber={goNext}
        decreaseQuestionNumber={goBack}
        questionsCount={questions.length}
        isAnswerGiven={answered}
        isBackAllowed={isSavedAnswer}
        onAnswersSubmit={async () => {
          // убираю поле timeout, бэку не пригодится, ответ засчитывается неверным в payload
          const payload = answers.map((answer) => ({
            question_id: answer.questionId,
            answer: answer.payload,
          }));
          console.log('Submit', payload);

          const quizResults = await submitQuizAnswers(
            id,
            payload as QuizAnswer<TrueFalseAnswerPayload>[],
          );
          if (onSubmit) onSubmit(quizResults);
        }}
      />
    </div>
  );
}

export default TrueFalseWidget;
