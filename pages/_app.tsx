import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TheLayout from '../components/layout/TheLayout';
import EntityProvider from '../store/entityContext';
import UserProvider from '../store/userContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <EntityProvider>
        <TheLayout>
          <Component {...pageProps} />
        </TheLayout>
      </EntityProvider>
    </UserProvider>
  );
}

export default MyApp;
