import Link from 'next/link';
import React, { useContext } from 'react';
import { AccountContext } from '../../store/accountContext';
import { EntityContext } from '../../store/entityContext';
import { PencilIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface AccountSetting {
  title: string;
  value: any;
  href?: string;
}

const AccountSettingsList: React.FC = () => {
  const accountCtx = useContext(AccountContext);
  const entityCtx = useContext(EntityContext);

  const accountSettings: AccountSetting[] = [
    {
      title: 'Username',
      value: accountCtx?.account?.username,
    },
    {
      title: 'Password',
      value: accountCtx?.account?.username,
    },
    {
      title: 'Users',
      value: accountCtx?.account?.users.length,
      href: '/whoiswatching',
    },
    {
      title: 'Bookmarked',
      value: entityCtx?.bookmarkedCount,
      href: '/browse/bookmarked',
    },
  ];

  return (
    <ul className='grid gap-4'>
      {accountSettings.map((accountSetting, index) => (
        <li
          key={accountSetting.title}
          className='invisible animate-fadeUp opacity-0'
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className='flex flex-wrap items-center justify-between gap-2 rounded-xl bg-app-blue-800 p-8'>
            {accountSetting.title}
            <div className='flex items-center gap-1'>
              <span className='text-app-blue-300'>{accountSetting.value}</span>
              {accountSetting.href ? (
                <Link href={accountSetting.href}>
                  <ArrowRightIcon className='h-5 w-5 cursor-pointer text-app-primary-red' />
                </Link>
              ) : (
                <PencilIcon className='h-5 w-5 text-app-primary-red' />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccountSettingsList;
