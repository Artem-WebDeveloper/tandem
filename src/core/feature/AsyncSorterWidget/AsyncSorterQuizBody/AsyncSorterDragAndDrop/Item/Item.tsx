import { useSortable } from '@dnd-kit/react/sortable';
import { useTheme } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import styles from './Item.module.scss';

function Item({ id, index, line }: { id: string; index: number; line: string }) {
  const theme = useTheme();
  const { isDragging, ref } = useSortable({ id, index, type: 'item', accept: 'item', group: line });

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{
        backgroundColor: isDragging ? theme.palette.primary.light : theme.palette.primary.main,
        color: theme.palette.background.default,
        boxShadow: isDragging ? theme.shadows[8] : '',
        fontWeight: 600,
        fontFamily: 'monospace',
      }}
    >
      {id}
      <DragIndicatorIcon className={styles.dragIcon} style={{ width: '16px' }} />
    </div>
  );
}

export default Item;
