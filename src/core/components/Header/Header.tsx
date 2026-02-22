import SwitchThemeButton from '../SwitchThemeButton/SwitchThemeButton';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <SwitchThemeButton />
      <h2 className={styles.title}>Header</h2>
    </header>
  );
}
