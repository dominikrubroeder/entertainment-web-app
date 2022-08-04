import React, { useContext, useRef, useState } from 'react';
import { User } from '../../data/data';
import { AccountContext } from '../../store/accountContext';

const AddUser: React.FC = () => {
  const accountCtx = useContext(AccountContext);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);

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
          <div className="w-40 h-40 flex items-center justify-center bg-app-blue-800 rounded-full border-4 border-transparent">
            + Profile image
          </div>
          <form onSubmit={createUserHandler}>
            <input
              placeholder="Username"
              className="bg-transparent text-white text-center focus:outline-none"
              ref={usernameRef}
            />
          </form>
        </div>
      )}

      <div
        className="w-40 h-40 flex items-center justify-center bg-app-blue-800 rounded-full border-4 border-transparent cursor-pointer hover:animate-scale-small hover:border-app-primary-red"
        onClick={() => setIsCreateUser(true)}
      >
        +
      </div>
    </div>
  );
};

export default AddUser;
