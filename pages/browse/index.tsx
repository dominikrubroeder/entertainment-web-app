import type { NextPage } from 'next';
import Head from 'next/head';
import Recommended from '../../components/recommended/Recommended';
import Trending from '../../components/trending/Trending';

const Browse: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Browse all | Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Browse all content"
        />
      </Head>

      <div className="flex flex-col gap-8">
        <Trending />
        <Recommended />
      </div>
    </section>
  );
};

export default Browse;
