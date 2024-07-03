import Socials from '../Socials/Socials';
import Nav from '../Nav/Nav';

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <Socials />
          <Nav />
        </div>
      </header>
    </>
  );
}