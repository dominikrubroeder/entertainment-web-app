import React, { useState } from 'react';
import { NextPage } from 'next';
import Logo from '../../components/icons/Logo';
import AuthenticationForm from '../../components/auth/AuthenticationForm';
import Head from 'next/head';
import Heading from '../../components/Heading';

const Auth: NextPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section>
      <Head>
        <title>
          Login or sign up | Web entertainment app | frontendmentor.io
        </title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Login or Sign Up"
        />
      </Head>

      <div className="max-w-[25rem] w-full m-auto animate-fadeUp">
        <div className="my-20 mx-auto">
          <Logo className="m-auto" />
        </div>

        <div className="grid gap-4 bg-app-blue-800 rounded-xl p-8 m-auto">
          <header>
            <Heading as="h1">{isLogin ? 'Login' : 'Sign Up'}</Heading>
          </header>

          <AuthenticationForm isLogin={isLogin} />

          <footer className="flex flex-wrap items-center gap-1 justify-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}

            <button
              className="text-app-primary-red"
              onClick={() => setIsLogin((previousState) => !previousState)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </footer>
        </div>

        <p className="text-xs text-center text-app-blue-300 p-4">
          For demonstration purposes just use <i>demo@demo.com</i> and{' '}
          <i>savepassword</i> as valid access data.
        </p>
      </div>
    </section>
  );
};

export default Auth;
