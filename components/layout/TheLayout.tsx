import React from 'react';
import Head from 'next/head';
import TheSidebar from './TheSidebar';
import SearchBar from '../SearchBar';
import { useRouter } from 'next/router';

interface TheLayoutProps {
  children?: React.ReactNode;
}

const TheLayout: React.FC<TheLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Movies - Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon-32x32.png"
          sizes="32x32"
        />
      </Head>

      <main>
        <TheSidebar />

        <div className="flex flex-col gap-8 lg:pt-8 lg:pl-40">
          <SearchBar />

          <section
            className={`mb-8 ${router.pathname !== '/' ? 'pr-4 md:pr-8' : ''}`}
          >
            {children}
          </section>
        </div>
      </main>
    </div>
  );
};

export default TheLayout;
