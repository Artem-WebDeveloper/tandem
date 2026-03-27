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
  Box,
  Collapse,
  LinearProgress,
  Typography,
} from '@mui/material';
import { isAxiosError } from 'axios';

import { registerApi } from '../../../core/api/auth';
import {
  validateUsername,
  validatePassword,
  getPasswordStrength,
} from '../../../core/utils/loginValidation';
import styles from './RegisterDialog.module.scss';

import { useTranslation } from 'react-i18next';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (newUsername: string) => void;
}

export default function RegisterDialog({ open, onClose, onSuccess }: RegisterModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const theme = useTheme();

  const { t } = useTranslation('login');

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
    if (serverError) {
      const timer = setTimeout(() => setServerError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [serverError]);

  useEffect(() => {
    if (!open) {
      setUsername('');
      setPassword('');
      setUsernameTouched(false);
      setPasswordTouched(false);
      setUsernameErrors([]);
      setPasswordErrors([]);
      setServerError(null);
    }
  }, [open]);

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
      await registerApi(username, password);
      onSuccess(username);
    } catch (err) {
      if (isAxiosError(err)) {
        setServerError(t('registerPage.messages.error'));
      } else {
        setServerError(t('registerPage.messages.unexpectedError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    username && password && usernameErrors.length === 0 && passwordErrors.length === 0;

  const passwordStrength = password ? getPasswordStrength(password) : null;

  const strengthColors = {
    weak: '#f44336',
    medium: '#ff9800',
    strong: '#4caf50',
  };

  const strengthLabels = {
    weak: t('validation.password.strength.weak'),
    medium: t('validation.password.strength.medium'),
    strong: t('validation.password.strength.strong'),
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
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
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

  const allErrors = [...usernameErrors, ...passwordErrors];
  const showErrors = (usernameTouched || passwordTouched) && allErrors.length > 0;

  return (
    <Dialog
      open={open}
      onClose={() => {
        if (!isLoading) {
          onClose();
        }
      }}
      PaperProps={{
        sx: dialogPaperStyle,
        className: styles.dialogPaper,
      }}
    >
      <DialogTitle sx={formTitleStyle} className={styles.formTitle}>
        {t('registerPage.title')}
      </DialogTitle>

      <DialogContent sx={{ padding: 0 }}>
        <Collapse in={!!serverError}>
          {serverError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {serverError}
            </Alert>
          )}
        </Collapse>

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label={t('registerPage.userName')}
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
            sx={{ mt: 0.5 }}
          />

          <TextField
            label={t('registerPage.password')}
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
              minHeight: '140px',
              maxHeight: '180px',
              overflow: 'auto',
              transition: 'all 0.3s ease',
            }}
          >
            {passwordTouched && password && passwordErrors.length === 0 && passwordStrength && (
              <Box sx={{ mb: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={(passwordStrength.score / 5) * 100}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: strengthColors[passwordStrength.strength],
                      borderRadius: 3,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 0.5,
                    color: strengthColors[passwordStrength.strength],
                    fontWeight: 500,
                  }}
                >
                  {strengthLabels[passwordStrength.strength]}
                </Typography>
              </Box>
            )}

            {/* Ошибки валидации */}
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
            sx={buttonStyle}
            className={styles.submitBtn}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              `${t('registerPage.btn.register')}`
            )}
          </Button>

          <Button
            variant="text"
            fullWidth
            onClick={onClose}
            disabled={isLoading}
            sx={textButtonStyle}
            className={styles.textBtn}
          >
            {t('registerPage.btn.cancel')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
