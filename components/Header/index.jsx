import { Navbar } from '../Navbar';
import { SocialMedia } from '../SocialMedia';
import styles from '../../styles/components/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <h2>Glamour.</h2>
      </div>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <SocialMedia />
    </header>
  );
}

export { Header };
