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
} from '@mui/material';
import { isAxiosError } from 'axios';

import { useAuthStore } from '../../core/store/auth.store';
import { loginApi } from '../../core/api/auth';
import styles from './Login.module.scss';
import logo from '../../core/assets/logo.svg';
import RegisterDialog from './RegisterDialog/RegisterDialog';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (error || successMsg) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccessMsg(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, successMsg]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setError(null);
    setIsLoading(true);

    try {
      const { access, refresh } = await loginApi(username, password);

      login(access, refresh);
      navigate('/library', { replace: true });
    } catch (err) {
      if (isAxiosError(err)) {
        const errorMessage =
          err.response?.data?.detail || 'Ошибка авторизации. Проверьте имя пользователя и пароль.';
        setError(errorMessage);
      } else {
        setError('Unexpected error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSuccess = (newUsername: string) => {
    setIsRegisterOpen(false);
    setSuccessMsg('Регистрация прошла успешно! Теперь вы можете войти.');
    setUsername(newUsername);
    setPassword('');
  };

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

  return (
    <Box className={styles.container} sx={containerStyle}>
      <Box className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <Typography variant="h4" component="h1" className={styles.mainTitle} sx={mainTitleStyle}>
          RS School Trainer
        </Typography>
        <Typography variant="body2" className={styles.subtitle} sx={subtitleStyle}>
          Тренажер по программированию для студентов
        </Typography>
      </Box>

      <Paper elevation={0} className={styles.formCard} sx={cardStyle}>
        <Typography variant="h6" component="h2" className={styles.formTitle} sx={mainTitleStyle}>
          Вход в систему
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {successMsg && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMsg}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Имя пользователя"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />

          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
            className={styles.submitBtn}
            sx={buttonStyle}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Войти'}
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={() => setIsRegisterOpen(true)}
            sx={textButtonStyle}
          >
            Нет аккаунта? Зарегистрируйтесь
          </Button>
        </form>
      </Paper>

      <RegisterDialog
        open={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleRegisterSuccess}
      />
    </Box>
  );
}
