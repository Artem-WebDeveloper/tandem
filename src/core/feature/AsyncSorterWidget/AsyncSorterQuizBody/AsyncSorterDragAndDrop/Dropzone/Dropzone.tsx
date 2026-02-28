import { useDroppable } from '@dnd-kit/react';
import { closestCorners } from '@dnd-kit/collision';
import styles from './Dropzone.module.scss';

function Dropzone({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref } = useDroppable({
    id,
    type: 'line',
    accept: 'item',
    collisionDetector: closestCorners,
  });

  return (
    <div ref={ref} className={styles.dropzone}>
      {children}
    </div>
  );
}

export default Dropzone;
