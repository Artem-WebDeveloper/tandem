import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

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
        <Navigation />
        <SwitchThemeButton />
      </div>
    </header>
  );
}
