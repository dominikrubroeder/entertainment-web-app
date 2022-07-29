import React from 'react';
import IconBookmark from '../icons/IconBookmark';
import IconHome from '../icons/IconHome';
import IconMovies from '../icons/IconMovies';
import IconTvSeries from '../icons/IconTvSeries';

const TheNavigation: React.FC = () => {
  return (
    <ul className="grid gap-10">
      <li>
        <IconHome />
      </li>
      <li>
        <IconMovies />
      </li>
      <li>
        <IconTvSeries />
      </li>
      <li>
        <IconBookmark />
      </li>
    </ul>
  );
};

export default TheNavigation;
