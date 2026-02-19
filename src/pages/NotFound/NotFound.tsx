import styles from './NotFound.module.scss';

import Layout from '../../core/components/Layout/Layout';

export default function NotFound() {
  return (
    <>
      <Layout>
        <h2 className={styles.title}>404 Page Not Found</h2>
      </Layout>
    </>
  );
}
