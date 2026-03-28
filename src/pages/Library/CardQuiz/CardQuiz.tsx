import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Typography, Button, Chip } from '@mui/material';

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
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
import { useLocale } from '@/core/i18n/useLocal';

export default function CardQuiz({ quizData }: { quizData: LibraryQuiz }) {
  const theme = useTheme();
  const locale = useLocale();
  const { t } = useTranslation('library');
  const quizTypeConfig = getQuizTypeConfig(t);

  const [isLike, setIsLike] = useState<boolean>(quizData.is_favorite);

  const {
    title,
    id,
    description,
    questions_count: questionsQuantity,
    time_limit: time,
    // is_favorite: isFavorite,
    difficulty,
    tags,
    section,
    type,
    user_progress: userProgress,
  } = quizData;

  let { best_result: bestResult } = userProgress;
  bestResult = bestResult !== null ? Math.floor(bestResult) : bestResult;

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

  const displayHeaderIcon = () => {
    return bestResult === 100 ? (
      <CheckCircleOutlineRoundedIcon sx={{ color: theme.palette.success.main }} />
    ) : bestResult !== null ? (
      <AdjustRoundedIcon sx={{ color: theme.palette.textLight }} />
    ) : (
      <PanoramaFishEyeIcon sx={{ color: theme.palette.textUltralight }} />
    );
  };

  return (
    <li
      style={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
      className={styles.card}
    >
      <header className={styles.cardHeading}>
        {displayHeaderIcon()}
        <h3 className={styles.cardTitle}>{title[locale]}</h3>

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
            {description?.[locale] || ''}
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
          {bestResult !== null
            ? `${t('cards.quizState.completed')} ${bestResult}%`
            : `${t('cards.quizState.noResults')}`}
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
