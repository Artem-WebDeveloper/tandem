import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link to={'/library'}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
          <div>
            <h1 className={styles.title}>RS School Trainer</h1>
            <p className={styles.descrip}>Тренажер по программированию</p>
          </div>
        </div>
      </div>
    </header>
  );
}
