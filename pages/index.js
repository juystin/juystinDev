import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>juystin.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headerTitle}>juystin</h1>
        </div>
        <div className={styles.navContainer}>
          <ul className={styles.nav}>
            <li><a href='/contact/'>Contact</a></li>
            <li><a href='/projects/'>Projects</a></li>
          </ul>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          juystin.dev
        </h1>

        <p className={styles.description}>
          Hello World!
        </p>

      </main>

    </div>
  );
}
