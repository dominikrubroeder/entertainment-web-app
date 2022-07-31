import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TheLayout>
      <Component {...pageProps} />
    </TheLayout>
  );
}

export default MyApp;
