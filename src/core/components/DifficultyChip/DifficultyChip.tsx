import { useTheme } from '@mui/material';
import Chip from '../Chip/Chip';

function DifficultyChip({
  difficulty,
  children,
}: {
  difficulty: number;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  switch (difficulty) {
    case 1:
      return (
        <Chip
          style={{
            color: theme.palette.success.dark,
            borderColor: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
          }}
        >
          {children}
        </Chip>
      );
    case 2:
      return (
        <Chip
          style={{
            color: theme.palette.warning.dark,
            borderColor: theme.palette.warning.main,
            backgroundColor: theme.palette.warning.light,
          }}
        >
          {children}
        </Chip>
      );
    case 3:
      return (
        <Chip
          style={{
            color: theme.palette.error.dark,
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
          }}
        >
          {children}
        </Chip>
      );
    default:
      return (
        <Chip
          style={{
            color: theme.palette.textLight,
            borderColor: theme.palette.text.secondary,
            backgroundColor: theme.palette.textUltralight,
          }}
        >
          {children}
        </Chip>
      );
  }
}

export default DifficultyChip;
