import styles from './Layout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
