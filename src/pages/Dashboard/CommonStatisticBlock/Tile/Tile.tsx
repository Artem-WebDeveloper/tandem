import { Skeleton, Typography, useTheme } from '@mui/material';
import styles from './Tile.module.scss';

type TileProps = {
  title: string;
  count: number | null;
  icon: React.ReactNode;
  color: 'success' | 'error' | 'warning' | 'info';
  description: string;
  isLoading: boolean;
};

export default function Tile({ title, count, icon, color, description, isLoading }: TileProps) {
  const theme = useTheme();

  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        borderColor: theme.palette[color].main,
      }}
    >
      <div className={styles.header}>
        <Typography variant="body2" sx={{ color: theme.palette.textLight, fontWeight: 500 }}>
          {title}
        </Typography>
        {icon}
      </div>

      {isLoading || count === null ? (
        <Skeleton variant="rounded" sx={{ width: '84px', height: '42px' }} />
      ) : (
        <h3 className={styles.value}>{count}</h3>
      )}

      <p className={styles.description} style={{ color: theme.palette.textLight }}>
        {description}
      </p>
    </div>
  );
}
