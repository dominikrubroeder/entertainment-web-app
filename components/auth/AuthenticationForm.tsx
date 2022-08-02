import React from 'react';

interface AuthenticationFormProps {
  isLogin: boolean;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ isLogin }) => {
  const inputClasses =
    'p-4 bg-transparent border-b-2 border-b-app-blue-300 focus:border-b-white focus:outline-none';

  return (
    <form className="grid gap-4">
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
        {isLogin ? 'Login to your account' : 'Create account'}
      </button>
    </form>
  );
};

export default AuthenticationForm;
