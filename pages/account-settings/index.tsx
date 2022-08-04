import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import AccountSettingsList from '../../components/account/AccountSettingsList';
import LogoutAction from '../../components/auth/LogoutAction';
import Logo from '../../components/icons/Logo';
import Heading from '../../components/typography/Heading';
import { AccountContext } from '../../store/accountContext';

const Home: NextPage = () => {
  const accoutCtx = useContext(AccountContext);

  return (
    <section className="max-w-screen-sm m-auto min-h-screen">
      <Head>
        <title>
          Account settings | Web entertainment app | frontendmentor.io
        </title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Account settings"
        />
      </Head>

      <header className="grid mb-4">
        <div className="my-20 mx-auto">
          <Logo className="m-auto" />
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Heading as="h1" mb={false}>
            Account settings:
            <span className="text-app-primary-red text-xs">
              {accoutCtx?.username}
            </span>
          </Heading>

          <LogoutAction />
        </div>
      </header>

      <AccountSettingsList />
    </section>
  );
};

export default Home;
