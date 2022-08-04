import { useRouter } from 'next/router';
import React, { useContext, useRef, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { LogoutIcon, PlusIcon } from '@heroicons/react/solid';
import { AccountContext } from '../../store/accountContext';
import { Account, defaultUser } from '../../data/data';

interface AuthenticationFormProps {
  isLogin: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isLogin }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const accountCtx = useContext(AccountContext);
  const usernameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const passwordRepeatInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameInputValue = usernameInputRef.current?.value.trim();
    const passwordInputValue = passwordInputRef.current?.value.trim();
    const passwordRepeatInputValue =
      passwordRepeatInputRef.current?.value.trim();

    if (usernameInputValue === '' || passwordInputValue === '') return;

    setIsLoading(true);

    if (isLogin) {
      accountCtx?.login(usernameInputValue!, passwordInputValue!);

      setTimeout(() => {
        setIsLoading(false);
        router.replace('/browse');
      }, 2000);

      return;
    }

    if (!isLogin) {
      if (passwordRepeatInputValue === '') return;

      if (passwordInputValue !== passwordRepeatInputValue) {
        console.log('Passwords do not match.');
        return;
      }

      const newAccount: Account = {
        id: 'idjohndoe',
        username: usernameInputValue!,
        password: passwordInputValue!,
        activeUser: defaultUser,
        users: [defaultUser],
      };

      accountCtx?.signUp(newAccount);

      setTimeout(() => {
        setIsLoading(false);
        router.replace('/whoiswatching');
      }, 2000);

      return;
    }
  };

  const inputClasses =
    'p-4 bg-transparent border-b-2 border-b-app-blue-300 focus:border-b-white focus:outline-none';

  if (isLoading)
    return (
      <div className="animate-bounce m-auto mb-10">
        <LoadingSpinner className="text-app-primary-red" />
      </div>
    );

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        placeholder="Email address"
        type="email"
        className={inputClasses}
        ref={usernameInputRef}
      />

      <input
        placeholder="Password"
        type="password"
        className={inputClasses}
        ref={passwordInputRef}
      />

      {!isLogin && (
        <input
          placeholder="Repeat password"
          type="password"
          className={inputClasses}
          ref={passwordRepeatInputRef}
        />
      )}

      <button className="bg-app-primary-red text-white p-4 rounded-xl">
        {isLoading && 'Loading...'}

        {!isLoading && isLogin ? (
          <span className="flex items-center gap-2 justify-center">
            Login to your account <LogoutIcon className="w-5 h-5 text-white" />
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center">
            Create account <PlusIcon className="w-5 h-5 text-white" />
          </span>
        )}
      </button>
    </form>
  );
};

export default AuthenticationForm;
