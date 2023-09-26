import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useState } from 'react';
import Header from '../components/header/Header';

export default function Home() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.contentContainer}>
        <Head>
          <title>juystin.dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Justin Nguyen
          </h1>
          <p className={styles.description}>
            Hello World!
          </p>
        </main>
      </div>
      <div className={styles.navContainer}></div>
    </div>
  );
}
