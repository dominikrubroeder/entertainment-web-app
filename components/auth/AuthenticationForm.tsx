import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface AuthenticationFormProps {
  isLogin: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isLogin }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    // validate...

    setTimeout(() => {
      setIsLoading(false);
      router.replace('/');
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
        {!isLoading && isLogin ? 'Login to your account' : 'Create account'}
      </button>
    </form>
  );
};

export default AuthenticationForm;
