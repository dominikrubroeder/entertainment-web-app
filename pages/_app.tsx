import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import EntityProvider from '../store/entityContext';
import AccountProvider from '../store/accountContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <EntityProvider>
        <TheLayout>
          <Component {...pageProps} />
        </TheLayout>
      </EntityProvider>
    </AccountProvider>
  );
}

export default MyApp;
