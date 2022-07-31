import type { NextPage } from 'next';
import Head from 'next/head';
import Recommended from '../components/recommended/Recommended';
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

      <div className="flex flex-col gap-8">
        <Trending />
        <Recommended />
      </div>
    </div>
  );
};

export default Home;
