import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../icons/Logo';
import TheNavigation from './TheNavigation';

const TheSidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 p-8 m-8 rounded-xl bg-app-blue-800 flex flex-col items-center justify-between z-50">
      <div className="flex flex-col gap-16 items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <TheNavigation />
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
