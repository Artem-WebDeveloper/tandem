import { useSortable } from '@dnd-kit/react/sortable';

import styles from './Item.module.scss';

function Item({ id, index, line }: { id: string; index: number; line: string }) {
  const { ref } = useSortable({ id, index, type: 'item', accept: 'item', group: line });

  return (
    <div ref={ref} className={styles.item}>
      {id}
    </div>
  );
}

export default Item;
