import styles from './styles.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
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
      <p>&copy; 2024 Gym Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;