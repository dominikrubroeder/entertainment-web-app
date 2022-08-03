import React, { useState, createContext } from 'react';
import { UserContextType, defaultUsers, User } from '../data/data';

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children?: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUsers, setCurrentUsers] = useState(defaultUsers);
  const [activeUser, setActiveUser] = useState(defaultUsers[0]);

  const setActiveUserHandler = (user: User) => {
    setActiveUser(user);
  };

  const setCurrentUsersHandler = (user: User) => {
    setCurrentUsers((previousState) => [...previousState, user]);
  };

  return (
    <UserContext.Provider
      value={{
        currentUsers,
        activeUser,
        setActiveUser: setActiveUserHandler,
        setCurrentUsers: setCurrentUsersHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
