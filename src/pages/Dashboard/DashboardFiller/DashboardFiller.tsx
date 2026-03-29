import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function DashboardFiller() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        borderColor: theme.palette.divider,
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        {t('dashboard.filler')}
      </Typography>
    </div>
  );
}

export default DashboardFiller;
