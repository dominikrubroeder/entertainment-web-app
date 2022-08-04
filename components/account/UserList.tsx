import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { User } from '../../data/data';
import { AccountContext } from '../../store/accountContext';
import Heading from '../Heading';

const UserList: React.FC = () => {
  const router = useRouter();
  const accountCtx = useContext(AccountContext);

  const setActiveUserHandler = (user: User) => {
    // Set selected user
    accountCtx?.setActiveUser(user);

    // Redirect to dashboard
    router.replace('/');
  };

  return (
    <ul className="flex flex-wrap gap-4">
      {accountCtx?.users.map((user, index) => (
        <li key={user.id}>
          <div
            className="grid gap-4 text-center opacity-0 invisible animate-fadeUp"
            style={{ animationDelay: `${index * 400}ms` }}
            onClick={() => setActiveUserHandler(user)}
          >
            <div
              className={`w-40 h-40 flex items-center justify-center border-4 ${
                user.id === accountCtx?.activeUser.id
                  ? 'border-app-primary-red'
                  : 'border-transparent'
              } rounded-full cursor-pointer bg-app-blue-800 hover:border-app-primary-red hover:animate-scale-small`}
            >
              {user.image ? (
                <Image
                  src={user.image}
                  width={160}
                  height={160}
                  alt={`${user.username} profile image`}
                />
              ) : (
                'No image.'
              )}
            </div>

            <Heading>{user.username}</Heading>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
