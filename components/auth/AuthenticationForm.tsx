import React, { useContext, useRef, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { ArrowLeftOnRectangleIcon, PlusIcon } from '@heroicons/react/24/solid';
import { AccountContext } from '../../store/accountContext';
import { defaultAccount } from '../../data/data';

interface AuthenticationFormProps {
  isLogin: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const accountCtx = useContext(AccountContext);
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const passwordRepeatInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      accountCtx?.setAccount(defaultAccount);
    }, 2000);

    // const usernameInputValue = usernameInputRef.current?.value.trim();
    // const passwordInputValue = passwordInputRef.current?.value.trim();
    // const passwordRepeatInputValue =
    //   passwordRepeatInputRef.current?.value.trim();

    // if (usernameInputValue === '' || passwordInputValue === '') return;

    // setIsLoading(true);

    // if (isLogin) {
    //   accountCtx?.login(usernameInputValue!, passwordInputValue!);

    //   setTimeout(() => {
    //     setIsLoading(false);
    //     router.replace('/browse');
    //   }, 2000);

    //   return;
    // }

    // if (!isLogin) {
    //   if (passwordRepeatInputValue === '') return;

    //   if (passwordInputValue !== passwordRepeatInputValue) {
    //     console.log('Passwords do not match.');
    //     return;
    //   }

    //   const newAccount: Account = {
    //     id: 'idjohndoe',
    //     username: usernameInputValue!,
    //     password: passwordInputValue!,
    //     activeUser: defaultUser,
    //     users: [defaultUser],
    //   };

    //   accountCtx?.signUp(newAccount);

    //   setTimeout(() => {
    //     setIsLoading(false);
    //     router.replace('/whoiswatching');
    //   }, 2000);

    //   return;
    // }
  };

  const inputClasses =
    'p-4 bg-transparent border-b-2 border-b-app-blue-300 focus:border-b-white focus:outline-none';

  if (isLoading)
    return (
      <div className='m-auto mb-10 animate-bounce'>
        <LoadingSpinner className='text-app-primary-red' />
      </div>
    );

  return (
    <form className='grid gap-4' onSubmit={handleSubmit}>
      <input
        placeholder='Email address'
        type='email'
        className={inputClasses}
        ref={usernameInputRef}
      />

      <input
        placeholder='Password'
        type='password'
        className={inputClasses}
        ref={passwordInputRef}
      />

      {!isLogin && (
        <input
          placeholder='Repeat password'
          type='password'
          className={inputClasses}
          ref={passwordRepeatInputRef}
        />
      )}

      <button className='rounded-xl bg-app-primary-red p-4 text-white'>
        {isLoading && 'Loading...'}

        {!isLoading && isLogin ? (
          <span className='flex items-center justify-center gap-2'>
            Login to your account{' '}
            <ArrowLeftOnRectangleIcon className='h-5 w-5 text-white' />
          </span>
        ) : (
          <span className='flex items-center justify-center gap-2'>
            Create account <PlusIcon className='h-5 w-5 text-white' />
          </span>
        )}
      </button>
    </form>
  );
};

export default AuthenticationForm;
