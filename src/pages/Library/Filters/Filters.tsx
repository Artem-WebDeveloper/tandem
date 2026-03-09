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

type FiltersProps = {
  allQuizzes: number | null;
  filterValues: LibraryFilters;
  onSetFilters: (filters: LibraryFilters) => void;
  loading: boolean;
};

export default function Filters({ allQuizzes, filterValues, onSetFilters, loading }: FiltersProps) {
  const theme = useTheme();

  const { section, type, difficulty } = filterValues;

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
              onSetFilters({ ...filterValues, section: newSection });
            }}
          >
            <MenuItem value="all">Все категории</MenuItem>
            {categories.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
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
              onSetFilters({ ...filterValues, type: newType });
            }}
          >
            <MenuItem value="all">Все типы</MenuItem>
            {types.map((type, i) => (
              <MenuItem key={i} value={type}>
                {quizTypeConfig[type]}
              </MenuItem>
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
              onSetFilters({ ...filterValues, difficulty: newDifficulty });
            }}
          >
            <MenuItem value="all">Все уровни</MenuItem>
            {difficulties.map((difficulty, i) => (
              <MenuItem key={i} value={difficulty}>
                {difficultyLabels[difficulty]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
