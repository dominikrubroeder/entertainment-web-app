import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import IconNavBookmark from '../icons/IconNavBookmark';
import IconBookmark from '../icons/IconNavBookmark';
import IconNavHome from '../icons/IconNavHome';
import IconNavMovies from '../icons/IconNavMovies';
import IconNavTvSeries from '../icons/IconNavTvSeries';

interface TheNavigationProps {
  className?: string;
}

const TheNavigation: React.FC<TheNavigationProps> = ({ className }) => {
  const router = useRouter();

  return (
    <ul
      className={`flex items-center gap-8 lg:grid lg:gap-10 ${
        className ? className : ''
      }`}
    >
      <Link href="/">
        <li className="group hover:cursor-pointer">
          <IconNavHome isActive={router.pathname === '/'} />
        </li>
      </Link>

      <Link href="/movies">
        <li className="group hover:cursor-pointer">
          <IconNavMovies isActive={router.pathname === '/movies'} />
        </li>
      </Link>

      <Link href="/tvseries">
        <li className="group hover:cursor-pointer">
          <IconNavTvSeries isActive={router.pathname === '/tvseries'} />
        </li>
      </Link>

      <Link href="/bookmarked">
        <li className="group hover:cursor-pointer">
          <IconNavBookmark isActive={router.pathname === '/bookmarked'} />
        </li>
      </Link>
    </ul>
  );
};

export default TheNavigation;
