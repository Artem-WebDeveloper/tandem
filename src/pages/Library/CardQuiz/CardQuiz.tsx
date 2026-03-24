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
import type { LibraryQuiz } from '../types';
import { difficultyLabels, getQuizTypeConfig, sectionConfig } from '@/core/configs/library.config';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';

import { useTranslation } from 'react-i18next';
import { LOCALE } from '@/core/configs/locale.config';

export default function CardQuiz({ quizData }: { quizData: LibraryQuiz }) {
  const theme = useTheme();

  const { t } = useTranslation('library');
  const quizTypeConfig = getQuizTypeConfig(t);

  const [isLike, setIsLike] = useState<boolean>(quizData.isFavorite);

  const {
    title,
    completePercentage,
    id,
    description,
    questions_count: questionsQuantity,
    time_limit: time,
    difficulty,
    tags,
    section,
    type,
    isComplete,
  } = quizData;

  const themeQuiz = sectionConfig[section];
  const accentColorThemeLabel = themeQuiz?.color ?? theme.palette.text.primary;
  const bgColorThemeLabel = themeQuiz?.bgLight ?? theme.palette.textUltralight;
  const typeQuizLabel = quizTypeConfig[type];

  const handleLikeToggle = () => {
    setIsLike((prev) => !prev);
    // updateLikeStatus(id, !isFavorite); // позже, после обсуждения с бэком
  };

  // TODO после согласования с бэком
  /* const updateLikeStatus = async (id: string, newStatus: boolean) => {
    try {
      await updateQuizFavoriteStatus(id, newStatus);
    } catch (error) {
      console.error('Ошибка при обновлении лайка', error);
      setIsLike((prev) => !prev);
    }
  }; */

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
        <h3 className={styles.cardTitle}>{title[LOCALE]}</h3>

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
        <IconButton className={styles.cardTheme} size="small" onClick={handleLikeToggle}>
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
            {description?.[LOCALE] || ''}
          </Typography>
        </section>

        <section className={styles.cardInfo} style={{ display: 'flex', gap: '10px' }}>
          {questionsQuantity && (
            <Typography
              variant="caption"
              sx={{
                display: 'flex',
                alignItems: 'end',
                fontSize: '13px',
                '@media (max-width: 360px)': {
                  fontSize: '12px',
                  alignItems: 'center',
                },
              }}
            >
              <DescriptionOutlinedIcon
                sx={{ width: 18, marginRight: 0.2, color: theme.palette.textLight }}
              />
              {questionsQuantity} {t('cards.countOfQuestions')}
            </Typography>
          )}
          {time && (
            <Typography
              variant="caption"
              sx={{
                display: 'flex',
                alignItems: 'end',
                fontSize: '13px',
                '@media (max-width: 360px)': {
                  fontSize: '12px',
                  alignItems: 'center',
                },
              }}
            >
              <AccessTimeRoundedIcon
                sx={{ width: 18, marginRight: 0.2, color: theme.palette.textLight }}
              />
              {time} {t('cards.min')}
            </Typography>
          )}
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
          {completePercentage
            ? `${t('cards.quizState.completed')} ${completePercentage}%`
            : `${t('cards.quizState.notStarted')}`}
        </Typography>
        <Button
          component={Link}
          to={`/practice/${id}`}
          variant="contained"
          sx={{ width: '70%', ml: 'auto' }}
        >
          {t('cards.startTest')}
        </Button>
      </footer>
    </li>
  );
}
