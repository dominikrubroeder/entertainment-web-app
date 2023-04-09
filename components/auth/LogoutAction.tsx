import React, { useContext } from 'react';
import { AccountContext } from '../../store/accountContext';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

const LogoutAction: React.FC = () => {
  const accountCtx = useContext(AccountContext);

  return (
    <div
      className='group flex cursor-pointer items-center gap-2'
      onClick={() => accountCtx?.setAccount(undefined)}
    >
      <span className='text-app-blue-300 group-hover:text-white'>Logout</span>
      <ArrowLeftOnRectangleIcon className='h-5 w-5 text-app-primary-red' />
    </div>
  );
};

export default LogoutAction;
