import { useDroppable } from '@dnd-kit/react';
import { closestCorners } from '@dnd-kit/collision';
import styles from './Dropzone.module.scss';
import { useTheme } from '@mui/material';

function Dropzone({ id, children }: { id: string; children: React.ReactNode }) {
  const theme = useTheme();

  const { ref } = useDroppable({
    id,
    type: 'line',
    accept: 'item',
    collisionDetector: closestCorners,
  });

  return (
    <div
      ref={ref}
      className={styles.dropzone}
      style={{
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.divider,
      }}
    >
      {children}
    </div>
  );
}

export default Dropzone;
