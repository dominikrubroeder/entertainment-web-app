import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import EntityProvider from '../store/entityContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntityProvider>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </EntityProvider>
  );
}

export default MyApp;
