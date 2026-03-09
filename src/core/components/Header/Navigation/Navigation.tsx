import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import { useTranslation } from 'react-i18next';

import styles from './Navigation.module.scss';
export default function Navigation({ onCloseSideNav }: { onCloseSideNav: () => void }) {
  const theme = useTheme();

  const { t } = useTranslation('common');

  const buttonStyle = {
    textTransform: 'none',
    color: theme.palette.text.primary,
    padding: '5px 12px',
    borderRadius: '8px',

    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },

    '@media (max-width: 1024px)': {
      width: '100%',
      borderRadius: '0',
      padding: '8px 15px',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'start',
    },
  };

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Button
            component={NavLink}
            to="/dashboard"
            startIcon={<LeaderboardRoundedIcon sx={{ width: '16px' }} />}
            sx={buttonStyle}
            onClick={onCloseSideNav}
          >
            {t('header.dashboard')}
          </Button>
        </li>
        <li>
          <Button
            component={NavLink}
            to="/library"
            startIcon={<LocalLibraryIcon sx={{ width: '16px' }} />}
            sx={buttonStyle}
            onClick={onCloseSideNav}
            className={styles.navLink}
          >
            {t('header.library')}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
