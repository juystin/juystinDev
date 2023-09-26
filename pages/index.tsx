import Head from 'next/head';

import { useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/content/index/Main';
import Navigation from '../components/nav/Navigation';

export default function Home() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Head>
          <title>juystin.dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header setNavOpen={setNavOpen}/>
      <Main />
      <Navigation navOpen={navOpen}/>
    </div>
  );
}
