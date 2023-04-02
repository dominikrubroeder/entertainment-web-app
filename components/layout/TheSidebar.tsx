import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { AccountContext } from "../../store/accountContext";
import UserAvatar from "../account/UserAvatar";
import Logo from "../icons/Logo";
import TheNavigation from "./TheNavigation";

const TheSidebar: React.FC = () => {
  const userCtx = useContext(AccountContext);

  return (
    <header className="p-4 mb-6 bg-app-blue-800 flex items-center justify-between z-50 md:p-8 md:m-8 md:rounded-xl lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:flex-col">
      <div className="flex items-center justify-between flex-1 lg:flex-col lg:gap-16 lg:flex-0 lg:justify-start">
        <Logo />

        <TheNavigation />

        <div className="lg:hidden"></div>
      </div>

      <UserAvatar>
        {userCtx?.account?.activeUser?.image && (
          <Image
            src={userCtx?.account.activeUser.image}
            width={40}
            height={40}
            alt={`${userCtx?.account.activeUser.username} profile image`}
          />
        )}
      </UserAvatar>
    </header>
  );
};

export default TheSidebar;
