import Link from 'next/link';
import React, { useContext } from 'react';
import { AccountContext } from '../../store/accountContext';
import { EntityContext } from '../../store/entityContext';
import { PencilIcon, ArrowRightIcon } from '@heroicons/react/solid';

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
      value: accountCtx?.username,
    },
    {
      title: 'Password',
      value: accountCtx?.username,
    },
    {
      title: 'Users',
      value: accountCtx?.users.length,
      href: '/whoiswatching',
    },
    {
      title: 'Bookmarked',
      value: entityCtx?.bookmarkedCount,
      href: '/browse/bookmarked',
    },
  ];

  return (
    <ul className="grid gap-4">
      {accountSettings.map((accountSetting, index) => (
        <li
          key={accountSetting.title}
          className="opacity-0 invisible animate-fadeUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between gap-2 flex-wrap bg-app-blue-800 rounded-xl p-8">
            {accountSetting.title}
            <div className="flex items-center gap-1">
              <span className="text-app-blue-300">{accountSetting.value}</span>
              {accountSetting.href ? (
                <Link href={accountSetting.href}>
                  <ArrowRightIcon className="w-5 h-5 text-app-primary-red cursor-pointer" />
                </Link>
              ) : (
                <PencilIcon className="w-5 h-5 text-app-primary-red" />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccountSettingsList;
