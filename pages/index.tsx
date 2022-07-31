import type { NextPage } from 'next';
import Head from 'next/head';
import TheSidebar from '../components/layout/TheSidebar';
import Recommended from '../components/recommended/Recommended';
import SearchBar from '../components/SearchBar';
import Trending from '../components/trending/Trending';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Web entertainment app | frontendmentor.io</title>
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
          <Trending />
          <Recommended />
        </div>
      </main>
    </div>
  );
};

export default Home;
