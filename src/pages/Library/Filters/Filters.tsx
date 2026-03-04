import { useState } from 'react';
import {
  useTheme,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
  Skeleton,
} from '@mui/material';
import styles from './Filters.module.scss';
import type { LibraryFilters } from '../types';
import type { Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';
import { difficultyLabels, quizTypeConfig, sectionConfig } from '@/core/configs/library.config';

export default function Filters({
  allQuizzes,
  onFiltersChange,
  loading,
}: {
  allQuizzes: number | null;
  onFiltersChange: (filters: LibraryFilters) => void;
  loading: boolean;
}) {
  const theme = useTheme();

  const [section, setSection] = useState<TaskTheme | 'all'>('all');
  const [type, setType] = useState<TaskType | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');

  const types = [...Object.keys(quizTypeConfig)] as TaskType[];
  const difficulties = Object.keys(difficultyLabels).map(Number) as Difficulty[];
  const categories = [...Object.keys(sectionConfig)] as TaskTheme[];

  return (
    <div
      className={styles.filters}
      style={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <div className={styles.filtersInfo}>
        <h3>Фильтрация</h3>
        {allQuizzes !== null ? (
          <Typography variant="body2">
            {allQuizzes === 0 ? 'Ничего не найдено' : `Найдено тестов: ${allQuizzes}`}{' '}
          </Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={130} height={20} />
        )}
      </div>
      <div className={styles.filtersForms}>
        <FormControl size="small" sx={{ flex: 1, minWidth: 165 }}>
          <InputLabel id="label-category" sx={{ left: '-2px' }}>
            Категория
          </InputLabel>
          <Select
            sx={{ fontSize: '15px' }}
            labelId="label-category"
            value={section}
            label="Категория"
            disabled={loading}
            onChange={(event) => {
              const newSection = event.target.value;
              setSection(newSection);
              onFiltersChange({ section: newSection, type, difficulty });
            }}
          >
            <MenuItem value="all">Все категории</MenuItem>
            {categories.map((category) => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ flex: 1, minWidth: 165 }}>
          <InputLabel id="label-type" sx={{ left: '-2px' }}>
            Тип теста
          </InputLabel>
          <Select
            sx={{ fontSize: '15px' }}
            labelId="label-type"
            value={type}
            label="Тип теста"
            disabled={loading}
            onChange={(event) => {
              const newType = event.target.value;
              setType(newType);
              onFiltersChange({ type: newType, section, difficulty });
            }}
          >
            <MenuItem value="all">Все типы</MenuItem>
            {types.map((type) => (
              <MenuItem value={type}>{quizTypeConfig[type]}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ flex: 1, minWidth: 165 }}>
          <InputLabel id="label-difficulty" sx={{ left: '-2px' }}>
            Сложность
          </InputLabel>
          <Select
            sx={{ fontSize: '15px' }}
            labelId="label-difficulty"
            value={difficulty}
            label="Сложность"
            disabled={loading}
            onChange={(event) => {
              const newDifficulty = event.target.value;
              setDifficulty(newDifficulty);
              onFiltersChange({ difficulty: newDifficulty, type, section });
            }}
          >
            <MenuItem value="all">Все уровни</MenuItem>
            {difficulties.map((difficulty) => (
              <MenuItem value={difficulty}>{difficultyLabels[difficulty]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
