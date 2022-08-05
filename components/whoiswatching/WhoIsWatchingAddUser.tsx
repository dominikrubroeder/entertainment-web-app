import { UserAddIcon, PencilIcon, CheckIcon } from '@heroicons/react/solid';
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
    <div className="flex flex-wrap gap-4">
      {isCreateUser && (
        <div className="grid gap-4 text-center opacity-0 invisible animate-fadeUp">
          <div
            className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-app-primary-red cursor-pointer animate-scale hover:animate-scale-small"
            onClick={createUserHandler}
          >
            {isCreateUser ? (
              <CheckIcon className="shrink-0 text-white w-4 h-4" />
            ) : (
              <PencilIcon className="shrink-0 text-white w-4 h-4" />
            )}
          </div>

          <UserAvatar width="w-40" height="h-40" />

          <form onSubmit={createUserHandler}>
            <input
              placeholder="Username"
              className="bg-transparent text-white text-center focus:outline-none"
              ref={usernameRef}
            />
          </form>
        </div>
      )}

      <UserAvatar width="w-40" height="h-40" onClick={initCreateUser}>
        <UserAddIcon className="w-10 h-10 text-app-blue-300" />
      </UserAvatar>
    </div>
  );
};

export default AddUser;
