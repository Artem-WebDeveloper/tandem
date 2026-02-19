import styles from './Library.module.scss';

import Header from '../../core/components/Header/Header';
import Footer from '../../core/components/Footer/Footer';

export default function Library() {
  return (
    <>
      <Header />
      <h2 className={styles.title}>Library</h2>

      <Footer />
    </>
  );
}
