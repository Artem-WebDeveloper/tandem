import { useState } from 'react';

import { Box, Fade, Typography, useTheme } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
// import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

import styles from './CardAnswer.module.scss';

function CardAnswer({
  cardTrue,
  correctStatement,
}: {
  cardTrue: boolean;
  correctStatement: boolean;
}) {
  const theme = useTheme();
  const [flipped, setFlipped] = useState(false);

  const isRightAnswer = correctStatement === cardTrue;

  return (
    <Box
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      onClick={() => setFlipped(true)}
      sx={{
        transform: flipped
          ? 'perspective(1300px) rotateY(180deg)'
          : 'perspective(1300px) rotateY(0deg)',
      }}
    >
      {/* Front */}
      <Box
        className={styles.cardFront}
        sx={{
          borderColor: theme.palette.textUltralight,
        }}
      >
        {cardTrue ? (
          <CheckCircleOutlineRoundedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.disabled }}
          />
        ) : (
          <HighlightOffRoundedIcon fontSize="large" sx={{ color: theme.palette.text.disabled }} />
        )}
        <Typography fontSize="large" color={theme.palette.textLight}>
          {cardTrue ? 'True' : 'False'}
        </Typography>
      </Box>

      {/* Back */}
      <Box
        className={`${styles.cardBack} ${isRightAnswer ? styles.cardBackRight : styles.cardBackWrong}`}
      >
        {isRightAnswer ? (
          <>
            <Fade timeout={1800} in={flipped}>
              <VerifiedRoundedIcon fontSize="large" />
            </Fade>
            <Typography fontSize="large">Верно!</Typography>
          </>
        ) : (
          <>
            <Fade timeout={1800} in={flipped}>
              <ThumbDownRoundedIcon fontSize="large" />
            </Fade>
            <Typography fontSize="large">Неверно!</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default CardAnswer;
