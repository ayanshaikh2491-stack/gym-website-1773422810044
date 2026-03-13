import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/gym-logo.png" alt="Gym logo" width={200} height={50} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/membership">
              <a>Membership Plans</a>
            </Link>
          </li>
          <li>
            <Link href="/classes">
              <a>Classes & Workouts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;