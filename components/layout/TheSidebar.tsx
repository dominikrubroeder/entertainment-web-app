import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { UserContext } from '../../store/userContext';
import Logo from '../icons/Logo';
import TheNavigation from './TheNavigation';

const TheSidebar: React.FC = () => {
  const userCtx = useContext(UserContext);

  return (
    <header className="p-4 mb-6 bg-app-blue-800 flex items-center justify-between z-50 md:p-8 md:m-8 md:rounded-xl lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:flex-col">
      <div className="flex items-center justify-between flex-1 lg:flex-col lg:gap-16 lg:flex-0 lg:justify-start">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <TheNavigation />

        <div className="lg:hidden"></div>
      </div>

      <div className="cursor-pointer hover:animate-scale">
        <Link href="/whoiswatching">
          <a>
            {userCtx?.activeUser.image ? (
              <Image
                src={userCtx?.activeUser.image}
                width={40}
                height={40}
                alt={`${userCtx?.activeUser.username} profile image`}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-app-blue-300"></div>
            )}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default TheSidebar;
