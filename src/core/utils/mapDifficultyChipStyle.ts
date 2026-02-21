import { green, grey, orange, red } from '@mui/material/colors';

const DIFFICULTY_STYLE_MAP: Record<number, React.CSSProperties> = {
  1: { color: green[900], backgroundColor: green[300], borderColor: green[900] },
  2: { color: orange[900], backgroundColor: orange[300], borderColor: orange[900] },
  3: { color: red[900], backgroundColor: red[300], borderColor: red[900] },
};

export function mapDifficultyChipStyle(difficulty: number): React.CSSProperties {
  return (
    DIFFICULTY_STYLE_MAP[difficulty] || {
      color: grey[900],
      backgroundColor: grey[500],
      borderColor: grey[900],
    }
  );
}
