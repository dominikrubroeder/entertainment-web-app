import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NotificationProps {
  title: string;
  message: string;
  type: string;
  selfDissolve?: boolean;
  /** number in milliseconds for self dissolving this notification */
  selfDissolveTime?: number;
}

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  type,
  selfDissolve = true,
  selfDissolveTime = 3000,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (selfDissolve) {
      setTimeout(() => {
        setMounted(false);
      }, selfDissolveTime);
    }

    return () => setMounted(false);
  }, [selfDissolve, selfDissolveTime]);

  let icon;

  switch (type) {
    case 'success':
      icon = <CheckCircleIcon className='h-5 w-5 shrink-0 text-green-400' />;
      break;

    case 'info':
      icon = (
        <InformationCircleIcon className='h-5 w-5 shrink-0 text-app-blue-300' />
      );
      break;

    case 'error':
      icon = (
        <ExclamationCircleIcon className='h-5 w-5 shrink-0 text-app-primary-red' />
      );
      break;

    default:
      icon = (
        <InformationCircleIcon className='h-5 w-5 shrink-0 text-app-blue-300' />
      );
      break;
  }

  const notification = (
    <div className='invisible fixed top-4 left-1/2 flex max-w-screen-sm animate-fadeUp items-start gap-2 rounded-xl bg-app-blue-800 p-4 opacity-0'>
      {icon}
      <div>
        <h2 className='text-white'>{title}</h2>
        <p className='text-app-blue-300'>{message}</p>
      </div>
    </div>
  );

  return mounted
    ? createPortal(notification, document.getElementById('notification')!)
    : null;
};

export default Notification;
