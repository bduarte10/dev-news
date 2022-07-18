import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | dev.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>12 de abril de 2033</time>
            <strong>Creating something bla bla bla</strong>
            <p>In this paragraph I start to writing some text</p>
          </a>
          <a href=''>
            <time>12 de abril de 2033</time>
            <strong>Creating something bla bla bla</strong>
            <p>In this paragraph I start to writing some text</p>
          </a>
          <a href=''>
            <time>12 de abril de 2033</time>
            <strong>Creating something bla bla bla</strong>
            <p>In this paragraph I start to writing some text</p>
          </a>
        </div>
      </main>
    </>
  );
}
