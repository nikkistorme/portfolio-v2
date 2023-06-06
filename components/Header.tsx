import Socials from './Socials';
import Nav from './Nav';

import styles from '@/styles/Header.module.css';

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