import React, { useState, createContext } from 'react';
import {
  AccountContextType,
  defaultAccount,
  defaultUsers,
  User,
} from '../data/data';

export const AccountContext = createContext<AccountContextType | null>(null);

type AccountProviderProps = {
  children?: React.ReactNode;
};

const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const [account, setAccount] = useState(defaultAccount);
  const [users, setUsers] = useState(account.users);
  const [activeUser, setActiveUser] = useState(account.users[0]);

  const setActiveUserHandler = (user: User) => {
    setActiveUser(user);
  };

  const setCurrentUsersHandler = (user: User) => {
    setUsers((previousState) => [...previousState, user]);
  };

  return (
    <AccountContext.Provider
      value={{
        users,
        activeUser,
        setActiveUser: setActiveUserHandler,
        setUsers: setCurrentUsersHandler,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
