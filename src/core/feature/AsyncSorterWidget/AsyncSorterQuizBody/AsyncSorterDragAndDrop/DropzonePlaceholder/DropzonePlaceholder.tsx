import { useTheme } from '@mui/material';
import styles from './DropzonePlaceholder.module.scss';

import { useTranslation } from 'react-i18next';

function DropzonePlaceholder() {
  const theme = useTheme();

  const { t } = useTranslation('practice');

  return (
    <div className={styles.container}>
      {t('asyncSorter.placeholder')}
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
