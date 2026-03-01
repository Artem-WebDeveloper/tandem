import { mapTagChipStyle } from '../../utils/mapTagChipStyle';
import Chip from '../Chip/Chip';

function TagChip({ tag }: { tag: string }) {
  const style = mapTagChipStyle(tag);

  return <Chip style={style}>{tag}</Chip>;
}

export default TagChip;
