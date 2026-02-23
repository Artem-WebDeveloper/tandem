import { Link } from 'react-router-dom';
import { Button, useTheme } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import SwitchThemeButton from './SwitchThemeButton/SwitchThemeButton';
import Navigation from './Navigation/Navigation';

export default function Header() {
  const theme = useTheme();
  return (
    <header className={styles.header} style={{ backgroundColor: theme.palette.background.paper }}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link to={'/library'}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
          <div>
            <h1 className={styles.title}>RS School Trainer</h1>
            <p className={styles.descrip} style={{ color: theme.palette.textLight }}>
              Тренажер по программированию
            </p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Navigation />
          <p
            className={styles.userName}
            style={{
              color: theme.palette.textLight,
              borderLeft: `1px solid ${theme.palette.primaryDisabled}`,
            }}
          >
            UserName123
          </p>
          <Button startIcon={<LogoutRoundedIcon sx={{ width: '16px' }} />}>Выход</Button>
          <SwitchThemeButton />
        </div>
      </div>
    </header>
  );
}
