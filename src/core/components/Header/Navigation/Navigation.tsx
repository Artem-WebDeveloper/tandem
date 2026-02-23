import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import styles from './Navigation.module.scss';
export default function Navigation() {
  const theme = useTheme();

  const buttonStyle = {
    textTransform: 'none',
    color: theme.palette.text.primary,
    padding: '5px 12px',
    borderRadius: '8px',

    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
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
          >
            Dashboard
          </Button>
        </li>
        <li>
          <Button
            component={NavLink}
            to="/library"
            startIcon={<LocalLibraryIcon sx={{ width: '16px' }} />}
            sx={buttonStyle}
          >
            Library
          </Button>
        </li>
      </ul>
    </nav>
  );
}
