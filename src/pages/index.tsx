import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Dev.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, seja bem vindo!</span>
          <h1>
            Notícias, dicas e tutoriais de <span>programação</span> para devs .
          </h1>
          <p>
            Obtenha acesso à todas as publicações <br />
            <span>por {product.amount} /mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image
          src='/images/avatar.svg'
          alt='girl coding'
          width={334}
          height={520}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LGYHpHcYIC7CXl3wXmsIdHI');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
