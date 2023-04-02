import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
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
      icon = <CheckCircleIcon className='w-5 h-5 text-green-400 shrink-0' />;
      break;

    case 'info':
      icon = (
        <InformationCircleIcon className='w-5 h-5 text-app-blue-300 shrink-0' />
      );
      break;

    case 'error':
      icon = (
        <ExclamationCircleIcon className='w-5 h-5 text-app-primary-red shrink-0' />
      );
      break;

    default:
      icon = (
        <InformationCircleIcon className='w-5 h-5 text-app-blue-300 shrink-0' />
      );
      break;
  }

  const notification = (
    <div className='fixed top-4 left-1/2 flex items-start gap-2 max-w-screen-sm p-4 rounded-xl bg-app-blue-800 opacity-0 invisible animate-fadeUp'>
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
