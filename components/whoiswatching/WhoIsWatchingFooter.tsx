import Link from 'next/link';
import React, { useContext } from 'react';
import { ArrowNarrowRightIcon, LogoutIcon } from '@heroicons/react/solid';
import { AccountContext } from '../../store/accountContext';

const WhoIsWatchingFooter: React.FC = () => {
  const accountCtx = useContext(AccountContext);

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

      <div
        className="group flex items-center gap-2 cursor-pointer"
        onClick={() => accountCtx?.setAuthenticated(false)}
      >
        <span className="text-app-blue-300 group-hover:text-white">Logout</span>
        <LogoutIcon className="h-5 w-5 text-app-primary-red" />
      </div>
    </footer>
  );
};

export default WhoIsWatchingFooter;
