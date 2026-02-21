import { mapDifficultyChipStyle } from '../../utils/mapDifficultyChipStyle';
import Chip from '../Chip/Chip';

function DifficultyChip({
  difficulty,
  children,
}: {
  difficulty: number;
  children: React.ReactNode;
}) {
  const style = mapDifficultyChipStyle(difficulty);

  return <Chip style={style}>{children}</Chip>;
}

export default DifficultyChip;
