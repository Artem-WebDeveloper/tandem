import styles from './Results.module.scss';
import { useTheme, Typography, Box, Container } from '@mui/material';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useTranslation } from 'react-i18next';
import Layout from '../../core/components/Layout/Layout';
import type { QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';

export default function Results<T extends UserAnswerPayload>({
  quizResults,
}: {
  quizResults: QuizResults<T>;
}) {
  const theme = useTheme();
  const { t } = useTranslation(['results', 'practice']);
  const correctAnswersPercentage = Math.round(
    quizResults.total_questions
      ? (quizResults.correct_count * 100) / quizResults.total_questions
      : 0,
  );

  return (
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
          <p>
            {quizResults.correct_count} {t('outOf')} {quizResults.total_questions}
          </p>
          <p>
            {correctAnswersPercentage}
            {t('correctAnswers')}
          </p>

          <Box className={styles.resultElementsContainer}>
            {quizResults.results.map((quizResult) => (
              <Box
                key={quizResult.question_id}
                className={styles.resultElement}
                style={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.divider,
                }}
              >
                <p>{quizResult.question_id}</p>
              </Box>
            ))}
          </Box>
        </div>
      </Container>
    </Layout>
  );
}
