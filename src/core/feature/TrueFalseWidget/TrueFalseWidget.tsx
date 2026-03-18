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
  const isAlreadyAnswered = answers[currentIndex] !== undefined;
  const questionSecondsLimit = difficultySecondsConfig[difficulty] || 10;
  const isTimeout = answers[currentIndex]?.isTimeout ?? false;

  function handleAnswer(selected: boolean) {
    setSelectedAnswered(selected);
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        questionId: questions[currentIndex].id,
        payload: selected,
        // isCorrect: selected === questions[currentIndex].correct, Можно легко и на фронте считать
      };
      return updated;
    });
  }

  const goNext = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next);
    setSelectedAnswered(answers[next]?.payload ?? null);
  };

  const goBack = () => {
    const prev = currentIndex - 1;
    setCurrentIndex(prev);
    setSelectedAnswered(answers[prev].payload);
  };

  const handleTimeout = () => {
    setSelectedAnswered(!correct);

    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        questionId: questions[currentIndex].id,
        payload: !correct,
        isTimeout: true,
      };
      return updated;
    });
  };

  return (
    <div className={styles.container}>
      <QuizProgressBar currentQuestionNumber={currentIndex + 1} questionsCount={questions.length} />

      <Box key={currentIndex} className={styles.main}>
        {!isAlreadyAnswered && (
          <Timer duration={questionSecondsLimit} onExpire={handleTimeout} key={currentIndex} />
        )}

        <Typography variant="h3" fontSize={18}>
          {questions[currentIndex].statement}
        </Typography>

        <section className={styles.answers}>
          <CardAnswer
            selectedAnswer={selectedAnswer}
            answered={answered}
            onSelectedAnswered={handleAnswer}
            cardType={true}
            correctStatement={correct}
            isTimeout={isTimeout}
          />
          <CardAnswer
            selectedAnswer={selectedAnswer}
            answered={answered}
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
