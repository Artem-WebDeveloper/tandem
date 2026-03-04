import { useTheme } from '@mui/material';
import styles from './DropzonePlaceholder.module.scss';

const PLACEHOLDER_TEXT = 'Ответ';

function DropzonePlaceholder() {
  const theme = useTheme();

  return (
    <div className={styles.container}>
      {PLACEHOLDER_TEXT}
      <div
        className={`${styles.corner} ${styles.cornerLeftTop}`}
        style={{ borderColor: theme.palette.text.primary }}
      ></div>
      <div
        className={`${styles.corner} ${styles.cornerRightTop}`}
        style={{ borderColor: theme.palette.text.primary }}
      ></div>
      <div
        className={`${styles.corner} ${styles.cornerRightBottom}`}
        style={{ borderColor: theme.palette.text.primary }}
      ></div>
      <div
        className={`${styles.corner} ${styles.cornerLeftBottom}`}
        style={{ borderColor: theme.palette.text.primary }}
      ></div>
    </div>
  );
}

export default DropzonePlaceholder;
