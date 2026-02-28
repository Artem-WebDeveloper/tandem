import styles from './Library.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CardQuiz from './CardQuiz/CardQuiz';
import { data } from '@/core/mock/library';

export default function Library() {
  return (
    <>
      <Layout>
        <h2 className={styles.title}>Library</h2>
        <ul className={styles.cards}>
          {data.map((quizData) => {
            return <CardQuiz quizData={quizData} key={quizData.id} />;
          })}
        </ul>
      </Layout>
    </>
  );
}
