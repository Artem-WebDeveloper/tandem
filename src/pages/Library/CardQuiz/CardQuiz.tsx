import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Typography, Button, Chip } from '@mui/material';

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { IconButton } from '@mui/material';

import styles from './CardQuiz.module.scss';
import type { libraryQuiz } from '../types';
import { difficultyLabels, quizTypeConfig, sectionConfig } from '@/core/configs/library.config';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';

export default function CardQuiz({ quizData }: { quizData: libraryQuiz }) {
  const theme = useTheme();
  const [isLike, setIsLike] = useState<boolean>(false);

  const {
    title,
    completeProcentage,
    id,
    description,
    questionsQuantity,
    time,
    difficulty,
    tags,
    section,
    type,
    isComplete,
  } = quizData;

  const themeQuiz = sectionConfig[section];
  const accentColorThemeLabel = themeQuiz?.color ?? theme.palette.primary.main;
  const bgColorThemeLabel = themeQuiz?.bgLight ?? theme.palette.background.paper;
  const typeQuizLabel = quizTypeConfig[type];

  return (
    <li
      style={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
      className={styles.card}
    >
      <header className={styles.cardHeading}>
        {isComplete ? (
          <CheckCircleOutlineIcon sx={{ color: theme.palette.success.main }} />
        ) : (
          <PanoramaFishEyeIcon sx={{ color: theme.palette.textUltralight }} />
        )}
        <h3 className={styles.cardTitle}>{title}</h3>

        <Chip
          label={themeQuiz?.label ?? section}
          size="small"
          sx={{
            backgroundColor: bgColorThemeLabel,
            color: accentColorThemeLabel,
            fontWeight: 700,
            fontSize: '11px',
            height: '20px',
            marginLeft: 'auto',
          }}
        />
        <IconButton
          className={styles.cardTheme}
          size="small"
          onClick={() => setIsLike((like) => !like)}
        >
          {isLike ? (
            <FavoriteRoundedIcon fontSize="small" sx={{ color: '#D13B3B' }} />
          ) : (
            <FavoriteBorderRoundedIcon fontSize="small" sx={{ color: '#FFBABA' }} />
          )}
        </IconButton>
      </header>
      <main className={styles.cardBody}>
        <section className={styles.cardDescription}>
          <Typography variant="body2" sx={{ minHeight: '20px', color: theme.palette.textLight }}>
            {description}
          </Typography>
        </section>

        <section className={styles.cardInfo} style={{ display: 'flex', gap: '10px' }}>
          <Typography
            variant="caption"
            sx={{ display: 'flex', alignItems: 'end', fontSize: '13px' }}
          >
            <DescriptionOutlinedIcon
              sx={{ width: 18, marginRight: 0.2, color: theme.palette.textLight }}
            />
            {questionsQuantity} вопросов
          </Typography>

          <Typography
            variant="caption"
            sx={{ display: 'flex', alignItems: 'end', fontSize: '13px' }}
          >
            <AccessTimeRoundedIcon
              sx={{ width: 18, marginRight: 0.2, color: theme.palette.textLight }}
            />
            {time} мин
          </Typography>

          <DifficultyChip difficulty={difficulty}>{difficultyLabels[difficulty]}</DifficultyChip>
        </section>

        <section className={styles.cardTags}>
          {typeQuizLabel && (
            <Chip
              label={typeQuizLabel}
              variant="outlined"
              size="small"
              sx={{
                borderColor: theme.palette.info.light,
                fontWeight: 500,
              }}
            />
          )}

          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              size="small"
              sx={{
                backgroundColor: theme.palette.info.light,
                color: theme.palette.text.secondary,
              }}
            />
          ))}
        </section>
      </main>
      <footer className={styles.cardFooter}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.textLight,
            width: '30%',
            fontSize: '12px',
            textAlign: 'center',
            lineHeight: '1.4',
          }}
        >
          {completeProcentage ? `Завершено ${completeProcentage}%` : 'Не начат'}
        </Typography>
        <Button
          component={Link}
          to={`/practice/${id}`}
          variant="contained"
          sx={{ width: '70%', ml: 'auto' }}
        >
          Начать тест
        </Button>
      </footer>
    </li>
  );
}
