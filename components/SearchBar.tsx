import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { EntityContext } from '../store/entityContext';
import IconSearch from './icons/IconSearch';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const entityCtx = useContext(EntityContext);
  const [searchValue, setSearchValue] = useState('');

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

  const onChangeHandler = (e: any) => {
    e.preventDefault();

    const inputSearchValue = e.target.value;

    setSearchValue(inputSearchValue);

    if (inputSearchValue === '') entityCtx?.searchFor(null);
    if (inputSearchValue !== '') entityCtx?.searchFor(inputSearchValue);
  };

  return (
    <form className="flex items-center gap-2 pl-4 md:pl-8 lg:pl-0">
      <IconSearch />

      <input
        placeholder={computePlaceholder()}
        className="bg-transparent focus:outline-none w-full"
        value={searchValue}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default SearchBar;
