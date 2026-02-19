import styles from './Results.module.scss';

import Header from '../../core/components/Header/Header';
import Footer from '../../core/components/Footer/Footer';

export default function Results() {
  return (
    <>
      <Header />
      <h2 className={styles.title}>Results</h2>
      <Footer />
    </>
  );
}
