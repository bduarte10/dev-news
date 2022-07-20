import '../styles/global.scss';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <PrismicProvider>
      <NextAuthProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </PrismicProvider>
  );
}

export default MyApp;
