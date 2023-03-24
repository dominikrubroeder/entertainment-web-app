import { useRouter } from "next/router";
import React, { useState, createContext, useEffect } from "react";
import {
  Account,
  AccountContextType,
  defaultAccount,
  User,
} from "../data/data";

export const AccountContext = createContext<AccountContextType | null>(null);

type AccountProviderProps = {
  children?: React.ReactNode;
};

const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const router = useRouter();
  const [account, setAccount] = useState<Account | null>(defaultAccount);
  const [users, setUsers] = useState<User[] | null>(null);
  const [activeUser, setActiveUser] = useState<User | null>(null);

  const { pathname } = router;

  const signUp = async (newAccount: Account) => {
    fetch(
      "https://webentertainmentapp-react-default-rtdb.firebaseio.com/accounts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setAccount(newAccount);
      })
      .catch((error) => {
        console.error("Error:", error);
        setAccount(null);
      });
  };

  const login = async (username: string, password: string) => {
    fetch(
      "https://webentertainmentapp-react-default-rtdb.firebaseio.com/accounts.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        const accounts: Account[] = [];

        for (const key in data) {
          const account: Account = {
            id: key,
            username: data[key].username as string,
            password: data[key].password as string,
            activeUser: data[key].users[0],
            users: data[key].users,
          };
          accounts.push(account);
        }

        const account = accounts.find(
          (account: Account) =>
            account.username === username && account.password === password
        );

        console.log(account);

        if (account) {
          // Refactor this to only one state
          setAccount(account);
          setActiveUser(account.users[0]);
          setUsers(account.users);
        } else {
          console.log("Account not found.");
          setAccount(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setAccount(null);
      });
  };

  const logout = () => {
    setAccount(null);
  };

  const setActiveUserHandler = (user: User) => {
    setActiveUser(user);
  };

  const addUserHandler = (user: User) => {
    if (users) {
      setUsers((previousState) => [...previousState!, user]);
    }

    if (!users) {
      setUsers([user]);
    }
  };

  useEffect(() => {
    console.log("Check if should redirect..");
    if (!account && pathname !== "/auth") router.replace("/auth");
  }, [account, pathname]);

  useEffect(() => {
    if (!account) return;

    if (account) {
      setUsers(account.users);
      setActiveUser(account.activeUser);
    }
  }, [account, account?.username]);

  useEffect(() => {
    if (!users) return;
    // update users for specific account on firebase
  }, [users]);

  if (!account && router.pathname !== "/auth") return <div>Redirecting...</div>;

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        login,
        logout,
        signUp,
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
