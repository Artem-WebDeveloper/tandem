import { Box, Fade, Typography, useTheme } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

import styles from './CardAnswer.module.scss';
import { useTranslation } from 'react-i18next';

type CardAnswerProps = {
  selectedAnswer: boolean | null;
  cardType: boolean;
  correctStatement: boolean;
  isTimeout: boolean;
  onSelectedAnswered: (isAnswered: boolean) => void;
};

function CardAnswer({
  selectedAnswer,
  onSelectedAnswered,
  cardType,
  correctStatement,
  isTimeout,
}: CardAnswerProps) {
  const theme = useTheme();
  const { t } = useTranslation('practice');

  const answered = selectedAnswer !== null;
  const isCardSelected = selectedAnswer === cardType; // если выбранный ответ соответствует типу карточки, значит выбрана именно эта карточка, ее переворачиваем
  const isRightAnswer = correctStatement === cardType;

  const frontIcon = cardType ? (
    <CheckCircleOutlineRoundedIcon fontSize="large" sx={{ color: theme.palette.text.disabled }} />
  ) : (
    <HighlightOffRoundedIcon fontSize="large" sx={{ color: theme.palette.text.disabled }} />
  );

  const backIcon = isRightAnswer ? (
    <VerifiedRoundedIcon fontSize="large" />
  ) : (
    <ThumbDownRoundedIcon fontSize="large" />
  );

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
      <Box className={styles.cardFront} sx={{ borderColor: theme.palette.textUltralight }}>
        {frontIcon}
        <Typography fontSize="large" color={theme.palette.textLight}>
          {cardType ? t('trueFalse.true') : t('trueFalse.false')}
        </Typography>
      </Box>

      {/* Back */}
      <Box
        className={`${styles.cardBack} ${isRightAnswer ? styles.cardBackRight : styles.cardBackWrong}`}
      >
        {isTimeout && isCardSelected ? (
          <Box textAlign="center">
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>{t('trueFalse.timeNotification')}</span>
              <HourglassBottomTwoToneIcon />
            </Typography>
            <Typography sx={{ mb: 1.8 }}>{t('trueFalse.cardNotice')}</Typography>
            <Typography fontWeight={600}>
              {t('trueFalse.correctAnswer')} {correctStatement ? 'TRUE' : 'FALSE'}
            </Typography>
          </Box>
        ) : (
          <>
            <p className={styles.cardBackType}>{cardType ? 'true' : 'false'}</p>
            <Fade timeout={1800} in={answered}>
              {backIcon}
            </Fade>
            <Typography fontSize="large">
              {isRightAnswer ? t('trueFalse.right') : t('trueFalse.wrong')}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default CardAnswer;
