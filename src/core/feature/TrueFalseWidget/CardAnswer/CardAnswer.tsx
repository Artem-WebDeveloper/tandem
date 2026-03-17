import { Box, Fade, Typography, useTheme } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

import styles from './CardAnswer.module.scss';

type CardAnswerProps = {
  selectedAnswer: boolean | null;
  answered: boolean;
  cardType: boolean;
  correctStatement: boolean;
  onSelectedAnswered: (isAnswered: boolean) => void;
};

function CardAnswer({
  selectedAnswer,
  answered,
  onSelectedAnswered,
  cardType,
  correctStatement,
}: CardAnswerProps) {
  const theme = useTheme();

  const isCardSelected = selectedAnswer === cardType; // если выбранный ответ соответствует типу карточки, значит выбрана именно эта карточка, ее переворачиваем
  const isRightAnswer = correctStatement === cardType;

  return (
    <Box
      className={`${styles.card} ${isCardSelected ? styles.flipped : ''}`}
      onClick={() => selectedAnswer === null && onSelectedAnswered(cardType)}
      sx={{
        opacity: answered && !isCardSelected ? 0.65 : 1,
        pointerEvents: answered ? 'none' : 'auto',
      }}
    >
      {/* Front */}
      <Box
        className={styles.cardFront}
        sx={{
          borderColor: theme.palette.textUltralight,
        }}
      >
        {cardType ? (
          <CheckCircleOutlineRoundedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.disabled }}
          />
        ) : (
          <HighlightOffRoundedIcon fontSize="large" sx={{ color: theme.palette.text.disabled }} />
        )}
        <Typography fontSize="large" color={theme.palette.textLight}>
          {cardType ? 'True' : 'False'}
        </Typography>
      </Box>

      {/* Back */}
      <Box
        className={`${styles.cardBack} ${isRightAnswer ? styles.cardBackRight : styles.cardBackWrong}`}
      >
        <p className={styles.cardBackType}>{cardType ? 'true' : 'false'}</p>
        <Fade timeout={1800} in={answered}>
          {isRightAnswer ? (
            <VerifiedRoundedIcon fontSize="large" />
          ) : (
            <ThumbDownRoundedIcon fontSize="large" />
          )}
        </Fade>
        <Typography fontSize="large"> {isRightAnswer ? 'Верно!' : 'Неверно!'}</Typography>
      </Box>
    </Box>
  );
}

export default CardAnswer;
