import { useState } from 'react';
import { Box, Collapse, Fade, Typography } from '@mui/material';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';

import type { TrueFalseTask } from './types';
import styles from './TrueFalseWidget.module.scss';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import CardAnswer from './CardAnswer/CardAnswer';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import Timer from './Timer/Timer';
import { difficultySecondsConfig } from '@/core/configs/trueFalseWidget.config';

type Answer = {
  questionId: string;
  payload: boolean;
  isTimeout?: boolean;
  // isCorrect: boolean;
};

function TrueFalseWidget({ data }: { data: TrueFalseTask }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswered] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { questions, difficulty } = data;
  const { correct, explanation } = questions[currentIndex];

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
        // isCorrect: selected === questions[currentIndex].correct, Можно легко и на фронте считать
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
          <Timer duration={questionSecondsLimit} onExpire={handleTimeout} key={currentIndex} />
        )}

        <Typography variant="h3" fontSize={18}>
          {questions[currentIndex].statement}
        </Typography>

        <section className={styles.answers}>
          <CardAnswer
            selectedAnswer={selectedAnswer}
            onSelectedAnswered={handleAnswer}
            cardType={true}
            correctStatement={correct}
            isTimeout={isTimeout}
          />
          <CardAnswer
            selectedAnswer={selectedAnswer}
            onSelectedAnswered={handleAnswer}
            cardType={false}
            correctStatement={correct}
            isTimeout={isTimeout}
          />
        </section>

        <Collapse in={answered} timeout={300}>
          <Box sx={{ pb: 1 }}>
            <Fade in={answered} timeout={500} style={{ transitionDelay: '400ms' }}>
              <Typography>
                <TipsAndUpdatesTwoToneIcon sx={{ translate: '0 3px' }} /> {explanation}
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
        onAnswersSubmit={() => {
          const payload = answers.map((answer) => ({
            questionId: answer.questionId,
            payload: answer.payload,
          }));
          console.log('Submit', payload);
        }} // Add answers submit
      />
    </div>
  );
}

export default TrueFalseWidget;
