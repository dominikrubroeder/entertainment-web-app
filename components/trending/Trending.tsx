import React from 'react';
import TrendingList from './TrendingList';

const Trending: React.FC = () => {
  return (
    <section>
      <h2 className="text-[2rem] mb-6">Trending</h2>
      <TrendingList />
    </section>
  );
};

export default Trending;
