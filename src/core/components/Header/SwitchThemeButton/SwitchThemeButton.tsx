import { useTheme } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import styles from './SwitchThemeButton.module.scss';

import { useThemeStore } from '@/core/store/theme.store';

import { useTranslation } from 'react-i18next';

function SwitchThemeButton() {
  const switchMode = useThemeStore((state) => state.switchMode);
  const mode = useThemeStore((state) => state.mode);
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <button
      onClick={switchMode}
      className={styles.button}
      aria-label={t('controls.toggleTheme')}
      title={t('controls.toggleTheme')}
    >
      {mode === 'light' ? (
        <LightModeRoundedIcon sx={{ color: theme.palette.primary.main }} />
      ) : (
        <DarkModeRoundedIcon sx={{ color: theme.palette.primary.main }} />
      )}
    </button>
  );
}

export default SwitchThemeButton;
