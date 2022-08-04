import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Heading from '../../components/Heading';
import { AccountContext } from '../../store/accountContext';

const Home: NextPage = () => {
  const accoutCtx = useContext(AccountContext);

  return (
    <div>
      <Head>
        <title>
          Account settings | Web entertainment app | frontendmentor.io
        </title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Account settings"
        />
      </Head>

      <Heading as="h1">
        Account settings:
        <span className="text-app-primary-red">
          {accoutCtx?.activeUser.username}
        </span>
      </Heading>
    </div>
  );
};

export default Home;
