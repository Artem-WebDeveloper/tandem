import { Typography, useTheme } from '@mui/material';
import styles from './Tile.module.scss';

export default function Tile({
  title,
  count,
  icon,
  color,
  description,
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: 'success' | 'error' | 'warning' | 'info';
  description: string;
}) {
  const theme = useTheme();

  return (
    <li
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

      <h3 className={styles.value}>{count}</h3>

      <p className={styles.description} style={{ color: theme.palette.textLight }}>
        {description}
      </p>
    </li>
  );
}
