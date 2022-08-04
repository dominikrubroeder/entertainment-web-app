import { useRouter } from 'next/router';
import React, { useState, createContext, useEffect } from 'react';
import { AccountContextType, defaultAccount, User } from '../data/data';

export const AccountContext = createContext<AccountContextType | null>(null);

type AccountProviderProps = {
  children?: React.ReactNode;
};

const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [account, setAccount] = useState(defaultAccount);
  const [users, setUsers] = useState(account.users);
  const [activeUser, setActiveUser] = useState(account.users[0]);

  const setAuthenticatedHandler = (isAuthenticated: boolean) => {
    setAuthenticated(isAuthenticated);
  };

  const setActiveUserHandler = (user: User) => {
    setActiveUser(user);
  };

  const addUserHandler = (user: User) => {
    setUsers((previousState) => [...previousState, user]);
  };

  const { pathname } = router;

  useEffect(() => {
    if (!authenticated) router.replace('/auth');
    console.log('running..');
  }, [authenticated, pathname]);

  if (!authenticated && router.pathname !== '/auth')
    return <div>Redirecting...</div>;

  return (
    <AccountContext.Provider
      value={{
        authenticated,
        setAuthenticated: setAuthenticatedHandler,
        username: account.username,
        users,
        addUser: addUserHandler,
        activeUser,
        setActiveUser: setActiveUserHandler,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
