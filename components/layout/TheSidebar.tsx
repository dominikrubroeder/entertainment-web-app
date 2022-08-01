import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../icons/Logo';
import TheNavigation from './TheNavigation';

const TheSidebar: React.FC = () => {
  return (
    <div className="p-4 bg-app-blue-800 flex items-center justify-between z-50 md:p-8 md:m-8 md:rounded-xl lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:flex-col">
      <div className="flex items-center justify-between flex-1 lg:flex-col lg:gap-16 lg:flex-0 lg:justify-start">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <TheNavigation />

        <div className="lg:hidden"></div>
      </div>

      <Image
        src="/assets/image-avatar.png"
        width={40}
        height={40}
        alt="User profile image"
      />
    </div>
  );
};

export default TheSidebar;
