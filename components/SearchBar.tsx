import React from 'react';
import IconSearch from './icons/IconSearch';

const SearchBar: React.FC = () => {
  return (
    <form className="flex items-center gap-2 pl-4 md:pl-8 lg:pl-0">
      <IconSearch />
      <input
        placeholder="Search for movies or TV series"
        className="bg-transparent focus:outline-none w-full"
      />
    </form>
  );
};

export default SearchBar;
