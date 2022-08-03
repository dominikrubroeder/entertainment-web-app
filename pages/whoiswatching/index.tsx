import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { User } from '../../data/data';
import Heading from '../../components/Heading';
import React, { useContext, useRef, useState } from 'react';
import { AccountContext } from '../../store/AccountContext';
import Link from 'next/link';
import { ArrowNarrowRightIcon, LogoutIcon } from '@heroicons/react/solid';

const WhoIsWatching: NextPage = () => {
  const router = useRouter();
  const accountCtx = useContext(AccountContext);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const profileImageClassNames = `w-40 h-40 flex items-center justify-center bg-app-blue-800 rounded-full border-4 border-transparent cursor-pointer hover:animate-scale-small hover:border-app-primary-red`;

  const setActiveUserHandler = (user: User) => {
    // Set selected user
    accountCtx?.setActiveUser(user);

    // Redirect to dashboard
    router.replace('/');
  };

  const createUserHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim();

    if (!username || username === '') return;

    const newUser: User = {
      id: Math.random(),
      username: username!,
      isActiveUser: false,
    };

    accountCtx?.setUsers(newUser);

    setIsCreateUser(false);

    usernameRef.current!.value = '';
  };

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
        <ul className="flex flex-wrap gap-4">
          {accountCtx?.users.map((user, index) => (
            <li key={user.id}>
              <div
                className="grid gap-4 text-center opacity-0 invisible animate-fadeUp"
                style={{ animationDelay: `${index * 400}ms` }}
                onClick={() => setActiveUserHandler(user)}
              >
                <div
                  className={`w-40 h-40 flex items-center justify-center border-4 ${
                    user.id === accountCtx?.activeUser.id
                      ? 'border-app-primary-red'
                      : 'border-transparent'
                  } rounded-full cursor-pointer bg-app-blue-800 hover:border-app-primary-red hover:animate-scale-small`}
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      width={160}
                      height={160}
                      alt={`${user.username} profile image`}
                    />
                  ) : (
                    'No image.'
                  )}
                </div>

                <Heading>{user.username}</Heading>
              </div>
            </li>
          ))}
        </ul>

        {isCreateUser && (
          <div className="grid gap-4 text-center opacity-0 invisible animate-fadeUp">
            <div className={profileImageClassNames}>+ Profile image</div>
            <form onSubmit={createUserHandler}>
              <input
                placeholder="Username"
                className="bg-transparent text-white text-center focus:outline-none"
                autoFocus
                ref={usernameRef}
              />
            </form>
          </div>
        )}

        <div
          className={profileImageClassNames}
          onClick={() => setIsCreateUser(true)}
        >
          +
        </div>
      </section>

      <footer className="absolute bottom-8 flex gap-8">
        <Link href="/account-settings">
          <div className="group flex items-center gap-2 cursor-pointer">
            <span className="text-app-blue-300 group-hover:text-white">
              Account settings
            </span>
            <ArrowNarrowRightIcon className="h-5 w-5 text-app-primary-red" />
          </div>
        </Link>

        <Link href="/auth">
          <div className="group flex items-center gap-2 cursor-pointer">
            <span className="text-app-blue-300 group-hover:text-white">
              Logout
            </span>
            <LogoutIcon className="h-5 w-5 text-app-primary-red" />
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default WhoIsWatching;
