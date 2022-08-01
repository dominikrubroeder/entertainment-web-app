import React from 'react';

interface CountBadgeProps {
  children: React.ReactNode;
}

const CountBadge: React.FC<CountBadgeProps> = ({ children }) => {
  return (
    <span className="text-xs font-bold text-app-primary-red">{children}</span>
  );
};

export default CountBadge;
