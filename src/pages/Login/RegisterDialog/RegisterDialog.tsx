import { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  CircularProgress,
  Alert,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { isAxiosError } from 'axios';

import { registerApi } from '../../../core/api/auth';
import styles from './RegisterDialog.module.scss';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (newUsername: string) => void;
}

export default function RegisterDialog({ open, onClose, onSuccess }: RegisterModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await registerApi(username, password);

      onSuccess(username);

      setUsername('');
      setPassword('');
    } catch (err) {
      if (isAxiosError(err)) {
        const errorMessage =
          err.response?.data?.username?.[0] ||
          err.response?.data?.detail ||
          err.response?.data?.password?.[1] ||
          'Ошибка регистрации. Возможно, пользователь уже существует.';
        setError(errorMessage);
      } else {
        setError('Непредвиденная ошибка');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formTitleStyle = {
    color: theme.palette.text.primary,
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
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  };

  const dialogPaperStyle = {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        if (!isLoading) {
          setError(null);
          onClose();
        }
      }}
      PaperProps={{
        sx: dialogPaperStyle,
        className: styles.dialogPaper,
      }}
    >
      <DialogTitle sx={formTitleStyle} className={styles.formTitle}>
        Регистрация
      </DialogTitle>

      <DialogContent sx={{ padding: 0 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Придумайте логин"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            sx={{ mt: 0.5 }}
          />

          <TextField
            label="Придумайте пароль"
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
            sx={buttonStyle}
            className={styles.submitBtn}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Зарегистрироваться'}
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={onClose}
            disabled={isLoading}
            sx={textButtonStyle}
            className={styles.textBtn}
          >
            Отмена
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
