import styles from './CategoryItem.module.scss';
import { Box, Chip, LinearProgress, Typography, useTheme } from '@mui/material';
import type { CategoryStatistic } from '../../types';
import { Link } from 'react-router-dom';

export default function CategoryItem({ item }: { item: CategoryStatistic }) {
  const theme = useTheme();
  const percentage = (item.completedTestsCount / item.tests) * 100;

  return (
    <Box
      component={'li'}
      className={styles.category_item}
      sx={{
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            borderColor: theme.palette.textLight,
          },
        },
      }}
    >
      <Link to={`/library?section=${item.theme}`} className={styles.category_link}>
        <div className={styles.title}>
          <div className={styles.count}>
            <Typography variant="body1">{item.theme}</Typography>
            <Chip
              variant="outlined"
              label={`${item.completedTestsCount}/${item.tests}`}
              size="small"
              color={`${percentage === 100 ? 'success' : 'default'}`}
            />
          </div>

          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {Math.ceil(percentage)}%
          </Typography>
        </div>

        <LinearProgress
          sx={{
            backgroundColor: theme.palette.divider,
            height: '8px',
            borderRadius: '8px',
            '& .MuiLinearProgress-bar': {
              borderRadius: '8px',
              backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundColor: theme.palette.secondary.main,
            },
          }}
          variant="determinate"
          value={percentage}
        />
      </Link>
    </Box>
  );
}
