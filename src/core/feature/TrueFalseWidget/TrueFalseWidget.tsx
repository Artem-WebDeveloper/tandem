import { useState } from 'react';
import { Typography } from '@mui/material';

import type { TrueFalseTask } from './types';
import styles from './TrueFalseWidget.module.scss';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import CardAnswer from './CardAnswer/CardAnswer';

function TrueFalseWidget({ data }: { data: TrueFalseTask }) {
  const [currentIndex] = useState(0);

  const { questions } = data;
  const { correct } = questions[currentIndex];
  return (
    <div className={styles.container}>
      <QuizProgressBar currentQuestionNumber={currentIndex + 1} questionsCount={questions.length} />
      <Typography variant="h3">{questions[currentIndex].statement}</Typography>

      <section className={styles.answers}>
        <CardAnswer cardTrue={true} correctStatement={correct} />
        <CardAnswer cardTrue={false} correctStatement={correct} />

        {/*  <Button variant="outlined" className={styles.answersBtn}>
          <VerifiedRoundedIcon />
          <span>True</span>
        </Button>
        <Button variant="outlined" className={styles.answersBtn}>
          <HighlightOffRoundedIcon />
          <span>False</span>
        </Button> */}
      </section>
    </div>
  );
}

export default TrueFalseWidget;
