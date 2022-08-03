import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { LogoutIcon, PlusIcon } from '@heroicons/react/solid';
import { AccountContext } from '../../store/accountContext';

interface AuthenticationFormProps {
  isLogin: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isLogin }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const accountCtx = useContext(AccountContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    // validate...

    setTimeout(() => {
      setIsLoading(false);
      accountCtx?.setAuthenticated(true);
      router.replace('/browse');
    }, 2000);
  };

  const inputClasses =
    'p-4 bg-transparent border-b-2 border-b-app-blue-300 focus:border-b-white focus:outline-none';

  if (isLoading)
    return (
      <div className="animate-bounce m-auto my-10">
        <LoadingSpinner className="text-app-primary-red" />
      </div>
    );

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        placeholder="Email address"
        type="email"
        className={inputClasses}
      />

      <input placeholder="Password" type="password" className={inputClasses} />

      {!isLogin && (
        <input
          placeholder="Repeat password"
          type="password"
          className={inputClasses}
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
