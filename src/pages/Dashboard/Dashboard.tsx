import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';

export default function Dashboard() {
  return (
    <>
      <Layout>
        <h2 className={styles.title}>Dashboard</h2>
      </Layout>
    </>
  );
}
