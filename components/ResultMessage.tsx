import React from 'react';
import CountBadge from './CountBadge';

interface ResultMessageProps {
  count: number;
  message?: string;
  searchValue: string;
}

const ResultMessage: React.FC<ResultMessageProps> = ({
  count,
  message,
  searchValue,
}) => {
  return (
    <span className="text-xs flex gap-2 items-center pt-1.5">
      <CountBadge>{count}</CountBadge> results found for {searchValue}
    </span>
  );
};

export default ResultMessage;
