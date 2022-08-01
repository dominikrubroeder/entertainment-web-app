import React, { useContext, useState } from 'react';
import { EntityContext } from '../../store/entityContext';
import ResultMessage from '../ResultMessage';
import RecommendedGrid from './RecommendedGrid';

const Recommended: React.FC = () => {
  const entityCtx = useContext(EntityContext);
  const [resultsCount, setResultsCount] = useState<number | null>(null);

  return (
    <section className="pr-4 md:pr-8">
      <h2 className="flex items-center gap-2 text-[2rem] mb-6">
        Recommendes for you
        {resultsCount !== null && (
          <ResultMessage
            count={resultsCount}
            searchValue={entityCtx!.searchValue}
          />
        )}
      </h2>

      <RecommendedGrid setResultsCount={setResultsCount} />
    </section>
  );
};

export default Recommended;
