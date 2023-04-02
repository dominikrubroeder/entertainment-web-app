import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { User } from "../../data/data";
import { AccountContext } from "../../store/accountContext";
import Heading from "../typography/Heading";
import UserAvatar from "./UserAvatar";

const UserList: React.FC = () => {
  const router = useRouter();
  const accountCtx = useContext(AccountContext);

  const setActiveUserHandler = (user: User) => {
    // Set selected user
    accountCtx?.setActiveUser(user);

    // Redirect to dashboard
    router.replace("/");
  };

  return (
    <ul className="flex flex-wrap gap-4">
      {accountCtx?.account?.users.map((user, index) => (
        <li key={user.id}>
          <div
            className="grid gap-4 text-center opacity-0 invisible animate-fadeUp"
            style={{ animationDelay: `${index * 400}ms` }}
            onClick={() => setActiveUserHandler(user)}
          >
            <UserAvatar
              width="w-40"
              height="w-40"
              activeBorder={user.id === accountCtx?.account?.activeUser!.id}
            >
              {user.image ? (
                <Image
                  src={user.image}
                  width={160}
                  height={160}
                  alt={`${user.username} profile image`}
                />
              ) : (
                <div className="h-40 w-40 rounded-full"></div>
              )}
            </UserAvatar>

            <Heading>{user.username}</Heading>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
