import Link from 'next/link';
import React from 'react';
import { ArrowNarrowRightIcon, LogoutIcon } from '@heroicons/react/solid';
import LogoutAction from '../auth/LogoutAction';

const WhoIsWatchingFooter: React.FC = () => {
  return (
    <footer className="absolute bottom-8 flex gap-8">
      <Link href="/account-settings">
        <div className="group flex items-center gap-2 cursor-pointer">
          <span className="text-app-blue-300 group-hover:text-white">
            Account settings
          </span>
          <ArrowNarrowRightIcon className="h-5 w-5 text-app-primary-red" />
        </div>
      </Link>

      <LogoutAction />
    </footer>
  );
};

export default WhoIsWatchingFooter;
