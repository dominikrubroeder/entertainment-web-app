import React from 'react';
import Head from 'next/head';
import TheSidebar from './TheSidebar';
import SearchBar from '../SearchBar';

interface TheLayoutProps {
  children?: React.ReactNode;
}

const TheLayout: React.FC<TheLayoutProps> = ({ children }) => {
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
        <div className="flex flex-col gap-8 pt-8 pl-40">
          <SearchBar />
          {children}
        </div>
      </main>
    </div>
  );
};

export default TheLayout;
