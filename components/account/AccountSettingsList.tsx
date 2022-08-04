import { PencilIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { AccountContext } from '../../store/accountContext';

interface AccountSetting {
  title: string;
  value: any;
}

const AccountSettingsList: React.FC = () => {
  const accountCtx = useContext(AccountContext);

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
      value: accountCtx?.users,
    },
  ];

  return (
    <ul className="grid gap-4">
      {accountSettings.map((accountSetting) => (
        <li key={accountSetting.title}>
          <div className="flex items-center justify-between gap-2 flex-wrap bg-app-blue-800 rounded-xl p-8">
            {accountSetting.title}
            <div className="flex items-center gap-1">
              <span className="text-app-blue-300">
                {accountSetting.value.toString()}
              </span>
              <PencilIcon className="w-5 h-5 text-app-primary-red" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccountSettingsList;
