import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  useTheme,
  Collapse,
  IconButton,
  Tooltip,
} from '@mui/material';
import { isAxiosError } from 'axios';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';

import { useAuthStore } from '../../core/store/auth.store';
import { loginApi } from '../../core/api/auth';
import styles from './Login.module.scss';
import { useThemeStore } from '../../core/store/theme.store';

import { validateUsername, validatePassword } from '../../core/utils/loginValidation';

import logo from '../../core/assets/logo.svg';
import RegisterDialog from './RegisterDialog/RegisterDialog';

import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t, i18n } = useTranslation('login');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [serverError, setServerError] = useState<string | null>(null);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const theme = useTheme();
  const { switchMode } = useThemeStore();

  useEffect(() => {
    if (usernameTouched && username) {
      const validation = validateUsername(username);
      setUsernameErrors(validation.errors);
    } else if (!username) {
      setUsernameErrors([]);
    }
  }, [username, usernameTouched]);

  useEffect(() => {
    if (passwordTouched && password) {
      const validation = validatePassword(password, username);
      setPasswordErrors(validation.errors);
    } else if (!password) {
      setPasswordErrors([]);
    }
  }, [password, passwordTouched, username]);

  useEffect(() => {
    if (serverError || successMsg) {
      const timer = setTimeout(() => {
        setServerError(null);
        setSuccessMsg(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [serverError, successMsg]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 15) {
      setUsername(value);
      if (!usernameTouched && value) {
        setUsernameTouched(true);
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!passwordTouched && e.target.value) {
      setPasswordTouched(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setUsernameTouched(true);
    setPasswordTouched(true);

    const usernameValidation = validateUsername(username);
    const passwordValidation = validatePassword(password, username);

    setUsernameErrors(usernameValidation.errors);
    setPasswordErrors(passwordValidation.errors);

    if (!usernameValidation.isValid || !passwordValidation.isValid) {
      return;
    }

    setServerError(null);
    setIsLoading(true);

    try {
      const { access, refresh } = await loginApi(username, password);

      login(access, refresh, { name: username });
      navigate('/library', { replace: true });
    } catch (err) {
      if (isAxiosError(err)) {
        setServerError(t('loginPage.messages.error'));
      } else {
        setServerError(t('loginPage.messages.error'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSuccess = (newUsername: string) => {
    setIsRegisterOpen(false);
    setSuccessMsg(`${t('loginPage.messages.success')}`);
    setUsername(newUsername);
    setPassword('');
    setUsernameTouched(false);
    setPasswordTouched(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('ru') ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  const isFormValid =
    username && password && usernameErrors.length === 0 && passwordErrors.length === 0;

  const containerStyle = {
    backgroundColor: theme.palette.background.default,
  };

  const mainTitleStyle = {
    color: theme.palette.text.primary,
  };

  const subtitleStyle = {
    color: theme.palette.text.secondary,
  };

  const cardStyle = {
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === 'light'
        ? '0 10px 30px rgba(0, 0, 0, 0.05)'
        : '0 10px 30px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${theme.palette.divider}`,
  };

  const buttonStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.9,
    },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  };

  const textButtonStyle = {
    textTransform: 'none',
    color: theme.palette.text.secondary,
    marginTop: '0.5rem',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  };

  const iconButtonStyle = {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  };

  const allErrors = [...usernameErrors, ...passwordErrors];
  const showErrors = (usernameTouched || passwordTouched) && allErrors.length > 0;

  return (
    <Box className={styles.container} sx={containerStyle}>
      <Box className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <Typography variant="h1" component="h1" className={styles.mainTitle} sx={mainTitleStyle}>
          {t('loginPage.title')}
        </Typography>
        <Typography variant="body1" className={styles.subtitle} sx={subtitleStyle}>
          {t('loginPage.description')}
        </Typography>
      </Box>

      <Paper elevation={0} className={styles.formCard} sx={cardStyle}>
        <Typography variant="h3" component="h3" className={styles.formTitle} sx={mainTitleStyle}>
          {t('loginPage.forms.title')}
        </Typography>

        <Collapse in={!!serverError}>
          {serverError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {serverError}
            </Alert>
          )}
        </Collapse>

        <Collapse in={!!successMsg}>
          {successMsg && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMsg}
            </Alert>
          )}
        </Collapse>

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label={t('loginPage.forms.userName')}
            type="text"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={handleUsernameChange}
            onBlur={() => setUsernameTouched(true)}
            disabled={isLoading}
            error={usernameTouched && usernameErrors.length > 0}
            helperText={
              usernameTouched && username && usernameErrors.length === 0
                ? `${username.length}/15 ${t('validation.username.characters')}`
                : ''
            }
          />

          <TextField
            label={t('loginPage.forms.password')}
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
            disabled={isLoading}
            error={passwordTouched && passwordErrors.length > 0}
          />

          <Box
            sx={{
              minHeight: '80px',
              maxHeight: '120px',
              overflow: 'auto',
              transition: 'all 0.3s ease',
            }}
          >
            <Collapse in={showErrors}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {allErrors.map((error, index) => (
                  <Alert
                    key={index}
                    severity="error"
                    sx={{
                      fontSize: '0.875rem',
                      py: 0.5,
                    }}
                  >
                    {t(error)}
                  </Alert>
                ))}
              </Box>
            </Collapse>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading || !isFormValid}
            className={styles.submitBtn}
            sx={buttonStyle}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              `${t('loginPage.forms.submitBtn')}`
            )}
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={() => setIsRegisterOpen(true)}
            sx={textButtonStyle}
          >
            {t('loginPage.forms.register')}
          </Button>
        </form>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          <Tooltip title={t('loginPage.controls.toggleTheme')}>
            <IconButton onClick={switchMode} sx={iconButtonStyle}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          <Tooltip title={t('loginPage.controls.toggleLanguage')}>
            <IconButton onClick={toggleLanguage} sx={iconButtonStyle}>
              <LanguageIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>

      <RegisterDialog
        open={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleRegisterSuccess}
      />
    </Box>
  );
}
