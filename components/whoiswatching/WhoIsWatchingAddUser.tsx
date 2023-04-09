import { UserPlusIcon } from '@heroicons/react/24/solid';
import React, { useContext, useRef, useState } from 'react';
import { User } from '../../data/data';
import { AccountContext } from '../../store/accountContext';
import UserAvatar from '../account/UserAvatar';

const AddUser: React.FC = () => {
  const accountCtx = useContext(AccountContext);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const initCreateUser = () => {
    setIsCreateUser(true);

    usernameRef.current?.focus();
  };

  const createUserHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim();

    if (!username || username === '') return;

    const newUser: User = {
      id: Math.random(),
      username: username!,
      isActiveUser: false,
    };

    accountCtx?.addUser(newUser);

    setIsCreateUser(false);

    usernameRef.current!.value = '';
  };

  return (
    <div className='flex flex-wrap gap-4'>
      {isCreateUser && (
        <div className='invisible grid animate-fadeUp items-center justify-center gap-4 opacity-0'>
          <div className='mx-auto'>
            <UserAvatar width='w-40' height='h-40' />
          </div>

          <form onSubmit={createUserHandler}>
            <input
              placeholder='Username'
              className='bg-transparent text-center text-white focus:outline-none'
              ref={usernameRef}
            />
          </form>
        </div>
      )}

      <UserAvatar width='w-40' height='h-40' onClick={initCreateUser}>
        <UserPlusIcon className='h-10 w-10 text-app-blue-300' />
      </UserAvatar>
    </div>
  );
};

export default AddUser;
