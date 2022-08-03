import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import IconNavBookmark from '../icons/IconNavBookmark';
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
      <Link href="/browse">
        <li className="group hover:cursor-pointer">
          <IconNavHome isActive={router.pathname === '/browse'} />
        </li>
      </Link>

      <Link href="/browse/movies">
        <li className="group hover:cursor-pointer">
          <IconNavMovies isActive={router.pathname === '/browse/movies'} />
        </li>
      </Link>

      <Link href="/browse/tvseries">
        <li className="group hover:cursor-pointer">
          <IconNavTvSeries isActive={router.pathname === '/browse/tvseries'} />
        </li>
      </Link>

      <Link href="/browse/bookmarked">
        <li className="group hover:cursor-pointer">
          <IconNavBookmark
            isActive={router.pathname === '/browse/bookmarked'}
          />
        </li>
      </Link>
    </ul>
  );
};

export default TheNavigation;
