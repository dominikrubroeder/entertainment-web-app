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
  const [account, setAccount] = useState<Account | undefined>(defaultAccount);

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
        setAccount(undefined);
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
        } else {
          console.log("Account not found.");
          setAccount(undefined);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setAccount(undefined);
      });
  };

  useEffect(() => {
    if (!account && pathname !== "/auth") {
      router.replace("/auth");
      return;
    }

    if (account && pathname === "/auth") router.replace("/browse");

    console.log("Check authentication");
  }, [account, pathname]);

  if (!account && router.pathname !== "/auth") return <div>Redirecting...</div>;

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        login,
        logout: () => {
          setAccount(undefined);
        },
        signUp,
        addUser: (user: User) => {
          setAccount((previousState) => {
            if (previousState === undefined) return undefined;

            return {
              ...previousState,
              users: [...previousState.users, user],
            };
          });
        },
        setActiveUser: (user: User) => {
          setAccount((previousState) => {
            if (previousState === undefined) return undefined;

            return { ...previousState, activeUser: user };
          });
        },
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
