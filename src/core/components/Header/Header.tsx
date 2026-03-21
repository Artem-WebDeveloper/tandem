import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, Drawer, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import styles from './Header.module.scss';
import SwitchThemeButton from './SwitchThemeButton/SwitchThemeButton';
import { useAuthStore } from '../../store/auth.store';
import logo from '../../assets/logo.svg';
import Navigation from './Navigation/Navigation';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation('common');
  const MEDIA_QUERY_CONDITION_DESKTOP = '(min-width:1024.1px)'; // для решения проблемы пограничного пикселя
  const CLOSE_SIDE_NAV_MS = 200;

  const { user, logout } = useAuthStore();
  const theme = useTheme();
  const isDesktop = useMediaQuery(MEDIA_QUERY_CONDITION_DESKTOP);

  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  const isOpenSideNav = openSideNav && !isDesktop;

  const handleCloseSideNav = () => {
    setOpenSideNav(false);
  };

  return (
    <header className={styles.header} style={{ backgroundColor: theme.palette.background.paper }}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link to={'/library'}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
          <div>
            <h1 className={styles.title}>{t(`header.title`)}</h1>
            <p className={styles.descrip} style={{ color: theme.palette.textLight }}>
              {t('header.description')}
            </p>
          </div>
        </div>

        <div className={styles.headerRight}>
          {isDesktop && (
            <>
              <Navigation onCloseSideNav={handleCloseSideNav} />
              <p
                className={styles.userName}
                style={{
                  color: theme.palette.textLight,
                  borderLeft: `1px solid ${theme.palette.primaryDisabled}`,
                }}
              >
                {user?.name || 'User'}
              </p>
              <SwitchThemeButton />
              <LanguageSwitcher />
              <Button startIcon={<LogoutRoundedIcon sx={{ width: '16px' }} />} onClick={logout}>
                {t('header.logout')}
              </Button>
            </>
          )}

          {!isDesktop && (
            <Button onClick={() => setOpenSideNav(true)}>
              <MenuIcon />
            </Button>
          )}

          <Drawer
            anchor="right"
            open={isOpenSideNav}
            transitionDuration={isDesktop ? 0 : CLOSE_SIDE_NAV_MS}
            onClose={handleCloseSideNav}
          >
            <Box sx={{ minWidth: 250, boxSizing: 'border-box' }}>
              <header className={styles.sideNavHeader}>
                <Button size="small" onClick={logout}>
                  <LogoutRoundedIcon sx={{ width: '22px' }} />
                </Button>
                <p style={{ color: theme.palette.textLight }}>{user?.name || 'User'}</p>
                <SwitchThemeButton />
                <LanguageSwitcher />
              </header>

              <Divider sx={{ borderColor: theme.palette.textUltralight }} />

              <Navigation onCloseSideNav={handleCloseSideNav} />
            </Box>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
