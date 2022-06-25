import Head from 'next/head';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { TrendArticle } from '../components/TrendArticle';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Loader /> */}

      <Header />
      <TrendArticle />
      <h2 className={styles.title}>San de More</h2>
    </div>
  );
}
