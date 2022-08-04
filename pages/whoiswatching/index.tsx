import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Heading from '../../components/Heading';
import AddUser from '../../components/account/AddUser';
import UserList from '../../components/account/UserList';
import WhoIsWatchingFooter from '../../components/whoiswatching/WhoIsWatchingFooter';

const WhoIsWatching: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center flex-col gap-4 h-screen">
      <Head>
        <title>
          Who is watching | Web entertainment app | frontendmentor.io
        </title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder"
        />
      </Head>

      <Heading as="h1">Who is watching?</Heading>

      <section className="flex flex-wrap gap-4">
        <UserList />
        <AddUser />
      </section>

      <WhoIsWatchingFooter />
    </div>
  );
};

export default WhoIsWatching;
