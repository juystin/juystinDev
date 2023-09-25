import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import menuIcon from "../assets/header/menu.svg"
import { useState } from 'react';

export default function Home() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.content}>
      <div className={styles.headerContainer}>  
          <div className={styles.headerTitleContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.titlePrimary}><strong>Justin Nguyen</strong></div>
              <div className={styles.titleSecondary}>Full Stack Developer</div>
            </div>
          </div>
          <div className={styles.menuContainer}>
              <Image
                priority
                src={menuIcon}
                alt="Menu"
              />
          </div>
      </div>
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
