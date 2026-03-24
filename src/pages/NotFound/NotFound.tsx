import styles from './NotFound.module.scss';

import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Layout from '../../core/components/Layout/Layout';

export default function NotFound() {
  const { t } = useTranslation('not-found');
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.heading}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2" className={styles.title}>
              {t('title')} 🙁
            </Typography>
          </div>
          <Button variant="contained" onClick={() => navigate(-1)}>
            {t('button')}
          </Button>
        </div>
      </Layout>
    </>
  );
}
