import Link from 'next/link';
import React from 'react';
import IconBookmark from '../icons/IconNavBookmark';
import IconNavHome from '../icons/IconNavHome';
import IconMovies from '../icons/IconNavMovies';
import IconTvSeries from '../icons/IconNavTvSeries';

const TheNavigation: React.FC = () => {
  return (
    <ul className="grid gap-10">
      <Link href="/">
        <li className="group hover:cursor-pointer">
          <IconNavHome />
        </li>
      </Link>
      <Link href="/movies">
        <li className="group hover:cursor-pointer">
          <IconMovies />
        </li>
      </Link>
      <li className="group hover:cursor-pointer">
        <IconTvSeries />
      </li>
      <li className="group hover:cursor-pointer">
        <IconBookmark />
      </li>
    </ul>
  );
};

export default TheNavigation;
