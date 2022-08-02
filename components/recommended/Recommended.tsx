import React, { useContext, useState } from 'react';
import { EntityContext } from '../../store/entityContext';
import ResultMessage from '../ResultMessage';
import RecommendedGrid from './RecommendedGrid';

const Recommended: React.FC = () => {
  const [resultsCount, setResultsCount] = useState<number | null>(null);
  const entityCtx = useContext(EntityContext);

  return (
    <section className="px-4 md:px-8">
      <h2 className="grid text-[2rem] mb-6 md:flex md:items-center md:gap-2">
        Recommended for you
        {resultsCount !== null && (
          <ResultMessage
            count={resultsCount}
            searchValue={entityCtx!.searchValue!}
          />
        )}
      </h2>

      <RecommendedGrid setResultsCount={setResultsCount} />
    </section>
  );
};

export default Recommended;
