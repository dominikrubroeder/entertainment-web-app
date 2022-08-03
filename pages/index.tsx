import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/browse');
  });

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
    </div>
  );
};

export default Home;
