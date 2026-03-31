import styles from './Results.module.scss';
import { useTheme, Typography, Box, Container } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/core/i18n/useLocal';
import ResultsNavigation from './ResultsNavigation/ResultsNavigation';

import Layout from '../../core/components/Layout/Layout';
import type { QuizResult, QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';
import type { QuizTask } from '@/core/types/quiz';
import { fetchQuizById } from '@/core/api/fetchQuizById';
import { useEffect, useState } from 'react';
import type {
  CodeCompletionQuestion,
  CodeCompletionAnswerPayload,
} from '@/core/feature/CodeCompletionWidget/types';
import type {
  SingleChoiceQuestion,
  SingleChoiceAnswerPayload,
} from '@/core/feature/SingleChoiceWidget/types';
import type {
  AsyncSorterQuestion,
  AsyncSorterAnswerPayload,
} from '@/core/feature/AsyncSorterWidget/types';
import type {
  TrueFalseQuestion,
  TrueFalseAnswerPayload,
} from '@/core/feature/TrueFalseWidget/types';
import type {
  CodeOrderingQuestion,
  CodeOrderingAnswerPayload,
} from '@/core/feature/CodeOrderingWidget/types';

export default function Results<T extends UserAnswerPayload>({
  quizResults,
  onRetry,
}: {
  quizResults: QuizResults<T>;
  onRetry: () => void;
}) {
  const theme = useTheme();
  const { t } = useTranslation(['results', 'practice']);
  const locale = useLocale();

  const [quizTask, setQuizTask] = useState<QuizTask | undefined>(undefined);
  useEffect(() => {
    fetchQuizById(quizResults.quiz_id).then((quizTask) => {
      setQuizTask(quizTask);
    });
  }, [quizResults.quiz_id]);

  const correctAnswersPercentage = Math.round(
    quizResults.total_questions
      ? (quizResults.correct_count * 100) / quizResults.total_questions
      : 0,
  );

  return (
    <Layout>
      <Container maxWidth="md" disableGutters={true}>
        {/* Ссылка на библиотеку */}
        <LinkButton href="/library">
          <ArrowBackRoundedIcon sx={{ width: '16px', marginRight: '8px' }} />
          {t('backToLibrary', { ns: 'practice' })}
        </LinkButton>
        <div
          className={styles.resultsContainer}
          style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
        >
          {/* Заголовок и подзаголовки */}
          <Typography variant="h1" className={styles.title}>
            {t('testCompleted')}
          </Typography>
          <Typography
            variant="h6"
            className={styles.resultStats}
            style={{
              // Текст окрашивается в зеленый, если верных ответов больше 80%,
              // то есть тест считается пройденым. Да это выглядит как магическое число.
              // Оно, по хорошему должно браться из единой переменной с бэка. Но пока так
              color: quizResults.correct_count
                ? quizResults.total_questions / quizResults.correct_count >= 0.8
                  ? theme.palette.success.main
                  : undefined
                : theme.palette.error.main,
            }}
          >
            {quizResults.correct_count} {t('outOf')} {quizResults.total_questions}
          </Typography>
          <Typography
            variant="body1"
            className={styles.answersPercentage}
            style={{ color: theme.palette.text.secondary }}
            sx={{ mb: 2 }}
          >
            {correctAnswersPercentage}
            {t('correctAnswers')}
          </Typography>

          <Box className={styles.resultElementsContainer}>
            {quizTask?.questions.map((question, index) => {
              // ищем ответ пользователя на вопрос в массиве ответов quizResults.results
              // сравниваем id вопроса в вопросах с id вопроса в ответах
              const quizResult = quizResults.results.find((quizResult) => {
                return quizResult.question_id === question.id;
              });

              // ничего не рендерим для этого вопроса если не нашли ответ на него
              if (!quizResult) return null;

              let questionText = '';
              let hintText = '';
              let answerText = '';
              let answerLinesArray: string[] = [];

              if (quizTask.type === 'single_choice') {
                questionText = (question as SingleChoiceQuestion).text[locale] ?? '';
                const optionId = (quizResult as QuizResult<SingleChoiceAnswerPayload>).user_answer;
                const optionText = (question as SingleChoiceQuestion).options.find(
                  (option) => option.id === optionId,
                )?.text;
                answerText = optionText?.[locale] ?? '';
              } else if (quizTask.type === 'code_completion') {
                questionText = (question as CodeCompletionQuestion).code;
                hintText = (question as CodeCompletionQuestion).hint[locale] ?? '';
                answerText = (quizResult as QuizResult<CodeCompletionAnswerPayload>).user_answer;
              } else if (quizTask.type === 'async_sorter') {
                questionText = (question as AsyncSorterQuestion).code;
                answerText = (quizResult as QuizResult<AsyncSorterAnswerPayload>).user_answer.join(
                  ' ',
                );
              } else if (quizTask.type === 'true_false') {
                questionText = (question as TrueFalseQuestion).statement[locale] ?? '';
                const isCorrect = (quizResult as QuizResult<TrueFalseAnswerPayload>).user_answer;
                answerText = t(isCorrect ? 'trueFalse.true' : 'trueFalse.false', {
                  ns: 'practice',
                });
              } else if (quizTask.type === 'code_ordering') {
                questionText = (question as CodeOrderingQuestion).text[locale] ?? '';
                // ((question as CodeOrderingQuestion).lines).map((line) => line.code);
                answerLinesArray = (quizResult as QuizResult<CodeOrderingAnswerPayload>)
                  .user_answer;
              }

              switch (quizTask.type) {
                case 'single_choice':
                case 'true_false':
                  return (
                    <Box
                      key={question.id}
                      className={styles.resultElement}
                      style={{
                        backgroundColor: theme.palette.background.default,
                        color: quizResult.is_correct
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        borderColor: theme.palette.divider,
                      }}
                    >
                      {quizResult.is_correct ? (
                        <CheckCircle
                          sx={{
                            fontSize: 20,
                            color: theme.palette.success.main,
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Cancel
                          sx={{
                            fontSize: 20,
                            color: theme.palette.error.main,
                            flexShrink: 0,
                          }}
                        />
                      )}

                      {/* Вопрос и ответ */}
                      <Box className={styles.resultTexts}>
                        {/* Вопрос */}
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          <strong>
                            {t('question')} {index + 1}:
                          </strong>{' '}
                          {questionText}
                        </Typography>

                        {/* Ответ пользователя */}
                        <Typography variant="body2">
                          <strong>{t('yourAnswer')}:</strong> {answerText}
                        </Typography>
                      </Box>
                    </Box>
                  );
                case 'code_completion':
                  return (
                    <Box
                      key={question.id}
                      className={styles.resultElement}
                      style={{
                        backgroundColor: theme.palette.background.default,
                        color: quizResult.is_correct
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        borderColor: theme.palette.divider,
                      }}
                    >
                      {quizResult.is_correct ? (
                        <CheckCircle sx={{ fontSize: 20, color: '#16a34a', flexShrink: 0 }} />
                      ) : (
                        <Cancel sx={{ fontSize: 20, color: '#dc2626', flexShrink: 0 }} />
                      )}

                      {/* Вопрос и ответ */}
                      <Box className={styles.resultTexts}>
                        {/* Вопрос */}
                        <Box className={styles.textCodeColumn} sx={{ mb: 1 }}>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>
                              {t('question')} {index + 1}:
                            </strong>{' '}
                            {hintText}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ p: '6px 12px', wordBreak: 'break-word' }}
                            className={styles.resultElement}
                            style={{
                              backgroundColor: `${theme.palette.divider}80`,
                              borderColor: theme.palette.divider,
                            }}
                          >
                            <code>{questionText}</code>
                          </Typography>
                        </Box>

                        {/* Ответ пользователя */}
                        <Typography variant="body2">
                          <strong>{t('yourAnswer')}:</strong> {answerText}
                        </Typography>
                      </Box>
                    </Box>
                  );
                case 'async_sorter':
                  return (
                    <Box
                      key={question.id}
                      className={styles.resultElement}
                      style={{
                        backgroundColor: theme.palette.background.default,
                        color: quizResult.is_correct
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        borderColor: theme.palette.divider,
                      }}
                    >
                      {quizResult.is_correct ? (
                        <CheckCircle
                          sx={{
                            fontSize: 20,
                            color: theme.palette.success.main,
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Cancel
                          sx={{
                            fontSize: 20,
                            color: theme.palette.error.main,
                            flexShrink: 0,
                          }}
                        />
                      )}

                      {/* Вопрос и ответ */}
                      <Box className={styles.resultTexts}>
                        {/* Вопрос */}
                        <Box className={styles.textCodeColumn} sx={{ mb: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 'bold', mb: 0.5, whiteSpace: 'nowrap' }}
                          >
                            {t('question')} {index + 1}:
                          </Typography>
                          <Box
                            sx={{ mb: 0.5, p: '6px 12px', wordBreak: 'break-word' }}
                            className={styles.resultElement}
                            style={{
                              backgroundColor: `${theme.palette.divider}80`,
                              borderColor: theme.palette.divider,
                            }}
                          >
                            <pre>
                              <code className={styles.codeText}>{questionText}</code>
                            </pre>
                          </Box>
                        </Box>

                        {/* Ответ пользователя */}
                        <Box className={styles.textRow}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            {t('yourAnswer')}:
                          </Typography>
                          <Typography variant="body2">{answerText}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                case 'code_ordering':
                  return (
                    <Box
                      key={question.id}
                      className={styles.resultElement}
                      style={{
                        backgroundColor: theme.palette.background.default,
                        color: quizResult.is_correct
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        borderColor: theme.palette.divider,
                      }}
                    >
                      {/* Иконка */}
                      {quizResult.is_correct ? (
                        <CheckCircle
                          sx={{
                            fontSize: 20,
                            color: theme.palette.success.main,
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Cancel
                          sx={{
                            fontSize: 20,
                            color: theme.palette.error.main,
                            flexShrink: 0,
                          }}
                        />
                      )}

                      {/* Вопрос и ответ */}
                      <Box className={styles.resultTexts}>
                        {/* Вопрос */}
                        <Box className={styles.textCodeColumn} sx={{ mb: 1 }}>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>
                              {t('question')} {index + 1}:
                            </strong>{' '}
                            {questionText}
                          </Typography>
                        </Box>

                        {/* Ответ пользователя */}
                        <Box className={styles.textCodeColumn}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {t('yourAnswer')}:
                          </Typography>

                          {answerLinesArray.map((line, index) => {
                            const lineCodeData = (question as CodeOrderingQuestion).lines.find(
                              (l) => answerLinesArray[index] === l.id,
                            );

                            const isCorrectLinePosition =
                              parseInt(line.slice(line.lastIndexOf('-') + 1), 10) - 1 === index;

                            return (
                              <Box
                                sx={{ mb: 0.5, p: '2px 12px 5px', wordBreak: 'break-word' }}
                                className={styles.resultElement}
                                style={{
                                  backgroundColor: `${isCorrectLinePosition ? theme.palette.success.light : theme.palette.error.light}50`,
                                  borderColor: `${isCorrectLinePosition ? theme.palette.success.main : theme.palette.error.main}50`,
                                }}
                              >
                                <pre className={styles.indent}>
                                  {'  '.repeat(lineCodeData?.indent ?? 0)}
                                </pre>
                                <pre>
                                  <code className={styles.codeText}>{lineCodeData?.code ?? 0}</code>
                                </pre>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    </Box>
                  );
              }
            })}
          </Box>
          <ResultsNavigation onRetry={onRetry} />
        </div>
      </Container>
    </Layout>
  );
}
