import React, { useContext } from 'react';
import { AccountContext } from '../../store/accountContext';
import { LogoutIcon } from '@heroicons/react/solid';

const LogoutAction: React.FC = () => {
  const accountCtx = useContext(AccountContext);

  return (
    <div
      className="group flex items-center gap-2 cursor-pointer"
      onClick={() => accountCtx?.setAccount(null)}
    >
      <span className="text-app-blue-300 group-hover:text-white">Logout</span>
      <LogoutIcon className="h-5 w-5 text-app-primary-red" />
    </div>
  );
};

export default LogoutAction;
