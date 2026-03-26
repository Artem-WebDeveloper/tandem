import styles from './Results.module.scss';
import { useTheme, Typography, Box, Container } from '@mui/material';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useTranslation } from 'react-i18next';
import Layout from '../../core/components/Layout/Layout';

export default function Results() {
  const theme = useTheme();
  const { t } = useTranslation(['results', 'practice']);
  const results: number[] = [1, 2, 3, 4, 5];
  const num = 10;

  return (
    <>
      <Layout>
        <Container maxWidth="md" disableGutters={true}>
          <LinkButton href="/library">
            <ArrowBackRoundedIcon sx={{ width: '16px', marginRight: '8px' }} />
            {t('backToLibrary', { ns: 'practice' })}
          </LinkButton>
          <div
            className={styles.resultsContainer}
            style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
          >
            <Typography variant="h1" className={styles.title}>
              {t('testCompleted')}
            </Typography>
            <p>0 {t('outOf')} 5</p>
            <p>
              {num}
              {t('correctAnswers')}
            </p>

            <Box className={styles.resultElementsContainer}>
              {results.map((a) => (
                <Box
                  className={styles.resultElement}
                  style={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.divider,
                  }}
                >
                  <p>{a}</p>
                </Box>
              ))}
            </Box>
          </div>
        </Container>
      </Layout>
    </>
  );
}
