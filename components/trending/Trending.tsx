import React, { useContext, useState } from 'react';
import { EntityContext } from '../../store/entityContext';
import CountBadge from '../CountBadge';
import ResultMessage from '../ResultMessage';
import TrendingList from './TrendingList';

const Trending: React.FC = () => {
  const [resultsCount, setResultsCount] = useState<number | null>(null);
  const entityCtx = useContext(EntityContext);

  return (
    <section className="pl-4 md:pl-8 lg:pl-0">
      <h2 className="flex items-center gap-2 text-[2rem] mb-6">
        Trending
        {resultsCount !== null && (
          <ResultMessage
            count={resultsCount}
            searchValue={entityCtx!.searchValue}
          />
        )}
      </h2>
      <TrendingList setResultsCount={setResultsCount} />
    </section>
  );
};

export default Trending;
