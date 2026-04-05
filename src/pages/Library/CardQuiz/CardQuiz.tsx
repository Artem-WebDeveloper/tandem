import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Typography, Button, Chip, IconButton, Tooltip } from '@mui/material';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import styles from './CardQuiz.module.scss';
import { tooltipProps, type LibraryQuiz } from '../types';
import { difficultyLabels, getQuizTypeConfig, sectionConfig } from '@/core/configs/library.config';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';
import HeaderIconStatus from './HeaderIconStatus/HeaderIconStatus';

import { useTranslation } from 'react-i18next';
import { useLocale } from '@/core/i18n/useLocal';
import { updateQuizFavoriteStatus } from '@/core/api/libraryApi/updateQuizFavoriteStatus';

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
    difficulty,
    tags,
    section,
    type,
    user_progress: userProgress,
  } = quizData;

  const { best_result: bestResult, is_perfect: isPerfect } = userProgress;

  const themeQuiz = sectionConfig[section];
  const accentColorThemeLabel = themeQuiz?.color ?? theme.palette.text.primary;
  const bgColorThemeLabel = themeQuiz?.bgLight ?? theme.palette.textUltralight;
  const typeQuizLabel = quizTypeConfig[type];

  const handleLikeToggle = async () => {
    setIsLike((prev) => !prev);
    try {
      await updateQuizFavoriteStatus(id);
    } catch {
      setIsLike((prev) => !prev);
    }
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
        <HeaderIconStatus isPerfect={isPerfect} bestResult={bestResult} />
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
          <Typography variant="body2" sx={{ minHeight: '42px', color: theme.palette.textLight }}>
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
        <Tooltip title={t('tooltips.condition')} {...tooltipProps}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.textLight,
              width: '30%',
              fontSize: '12px',
              textAlign: 'center',
              lineHeight: '1.4',
              userSelect: 'none',
              cursor: 'help',
            }}
          >
            {bestResult !== null
              ? `${t('cards.quizState.completed')} ${Math.floor(bestResult)}%`
              : `${t('cards.quizState.noResults')}`}
          </Typography>
        </Tooltip>
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
