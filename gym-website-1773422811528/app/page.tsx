import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';

function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to send form data
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Membership Plans</h2>
            <p>Learn more about our membership plans</p>
            <Link href="/membership">
              <a>View Plans</a>
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Classes & Workouts</h2>
            <p>Check out our classes and workout schedules</p>
            <Link href="/classes">
              <a>View Schedules</a>
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Get in Touch</h2>
            <p>Contact us for any questions or concerns</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/next-logo.svg" alt="Next.js logo" width={72} height={18} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Page;