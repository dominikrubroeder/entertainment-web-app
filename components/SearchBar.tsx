import { useRouter } from 'next/router';
import React from 'react';
import IconSearch from './icons/IconSearch';

const SearchBar: React.FC = () => {
  const router = useRouter();

  const computePlaceholder = () => {
    switch (router.pathname) {
      case '/movies':
        return 'Search movies';

      case '/tvseries':
        return 'Search TV series';

      case '/bookmarked':
        return 'Search bookmarked movies or TV series';

      default:
        return 'Search for movies or TV series';
    }
  };

  return (
    <form className="flex items-center gap-2 pl-4 md:pl-8 lg:pl-0">
      <IconSearch />
      <input
        placeholder={computePlaceholder()}
        className="bg-transparent focus:outline-none w-full"
      />
    </form>
  );
};

export default SearchBar;
