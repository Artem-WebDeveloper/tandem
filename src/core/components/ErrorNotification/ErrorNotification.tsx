import { Alert, useTheme } from '@mui/material';

function ErrorNotification({ message }: { message: string }) {
  const theme = useTheme();

  return (
    <Alert
      severity="error"
      sx={{ backgroundColor: theme.palette.error.light, color: theme.palette.error.dark }}
    >
      {message}
    </Alert>
  );
}

export default ErrorNotification;
