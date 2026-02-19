import styles from './Dashboard.module.scss';

import Header from '../../core/components/Header/Header';
import Footer from '../../core/components/Footer/Footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <h2 className={styles.title}>Dashboard</h2>
      <Footer />
    </>
  );
}
