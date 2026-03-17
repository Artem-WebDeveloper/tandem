import { useState } from 'react';
import { Box, Collapse, Fade, Typography } from '@mui/material';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';

import type { TrueFalseTask } from './types';
import styles from './TrueFalseWidget.module.scss';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import CardAnswer from './CardAnswer/CardAnswer';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';

type Answer = {
  questionId: string;
  payload: boolean;
  // isCorrect: boolean;
};

function TrueFalseWidget({ data }: { data: TrueFalseTask }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswered] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [slideIn, setSlideIn] = useState(true);

  const answered = selectedAnswer !== null;

  const { questions } = data;
  const { correct, explanation } = questions[currentIndex];

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

    setSlideIn(false);
  };

  const goBack = () => {
    const prev = currentIndex - 1;
    setCurrentIndex(prev);
    setSelectedAnswered(answers[prev].payload);

    setSlideIn(false);
  };

  return (
    <div className={styles.container}>
      <QuizProgressBar currentQuestionNumber={currentIndex + 1} questionsCount={questions.length} />

      <Fade in={slideIn} timeout={100} onExited={() => setSlideIn(true)}>
        <Box className={styles.main}>
          <Typography variant="h3">{questions[currentIndex].statement}</Typography>

          <section className={styles.answers}>
            <CardAnswer
              selectedAnswer={selectedAnswer}
              answered={answered}
              onSelectedAnswered={handleAnswer}
              cardType={true}
              correctStatement={correct}
            />
            <CardAnswer
              selectedAnswer={selectedAnswer}
              answered={answered}
              onSelectedAnswered={handleAnswer}
              cardType={false}
              correctStatement={correct}
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
      </Fade>

      <QuizNavigation
        currentQuestionNumber={currentIndex}
        increaseQuestionNumber={goNext}
        decreaseQuestionNumber={goBack}
        questionsCount={data.questions.length}
        isAnswerGiven={selectedAnswer !== null}
        onAnswersSubmit={() => {
          console.log('Submit', answers);
        }} // Add answers submit
      />
    </div>
  );
}

export default TrueFalseWidget;
