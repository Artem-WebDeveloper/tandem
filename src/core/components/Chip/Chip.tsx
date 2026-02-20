import type { ReactNode } from 'react';

import styles from './Chip.module.scss';

function Chip({ style, children }: { style: React.CSSProperties; children: ReactNode }) {
  return (
    <div className={styles.chip} style={style}>
      {children}
    </div>
  );
}

export default Chip;
