import { useTheme, Typography, Button } from '@mui/material';

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { IconButton } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styles from './CardQuiz.module.scss';
import type { libraryQuiz } from '../types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardQuiz({ quizData }: { quizData: libraryQuiz }) {
  const theme = useTheme();
  const [isLike, setIsLike] = useState<boolean>(false);

  const { title, completeProcentage, id } = quizData;
  return (
    <li
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
      className={styles.card}
    >
      <div className={styles.cardHeading}>
        {completeProcentage === 0 ? (
          <PanoramaFishEyeIcon sx={{ color: theme.palette.textUltralight }} />
        ) : (
          <CheckCircleOutlineIcon sx={{ color: theme.palette.success.main }} />
        )}
        <Typography component={'h3'}>{title}</Typography>
        <IconButton
          size="small"
          sx={{ marginLeft: 'auto' }}
          onClick={() => setIsLike((like) => !like)}
        >
          {isLike ? (
            <FavoriteRoundedIcon fontSize="small" sx={{ color: '#D13B3B' }} />
          ) : (
            <FavoriteBorderRoundedIcon fontSize="small" sx={{ color: '#FFBABA' }} />
          )}
        </IconButton>
      </div>

      <Button
        component={Link}
        to={`/practice/${id}`}
        variant="contained"
        sx={{ width: '100%', mt: 'auto' }}
      >
        Начать тест
      </Button>
    </li>
  );
}
