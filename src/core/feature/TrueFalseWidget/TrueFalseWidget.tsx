import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import type { TrueFalseTask } from './types';
import styles from './TrueFalseWidget.module.scss';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';

function TrueFalseWidget({ data }: { data: TrueFalseTask }) {
  const [currentIndex] = useState(0);
  const { questions } = data;
  return (
    <div className={styles.container}>
      <QuizProgressBar currentQuestionNumber={currentIndex + 1} questionsCount={questions.length} />
      <Typography variant="h3">{questions[currentIndex].statement}</Typography>

      <section className={styles.answers}>
        <Button variant="outlined" className={styles.answersBtn}>
          <VerifiedRoundedIcon />
          <span>True</span>
        </Button>
        <Button variant="outlined" className={styles.answersBtn}>
          <HighlightOffRoundedIcon />
          <span>False</span>
        </Button>
      </section>
    </div>
  );
}

export default TrueFalseWidget;
