import React, { useContext, useEffect } from 'react';
import { EntityContext } from '../../store/entityContext';
import EntityGrid from '../EntityGrid';

interface RecommendedGridProps {
  setResultsCount: (count: number | null) => void;
}

const RecommendedGrid: React.FC<RecommendedGridProps> = ({
  setResultsCount,
}) => {
  const entityCtx = useContext(EntityContext);

  const { searchValue } = entityCtx!;

  const filteredRecommended = entityCtx!.recommended.filter((entity) =>
    entity.title
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(entityCtx!.transformedSearchValue!)
  );

  useEffect(() => {
    if (searchValue !== '') setResultsCount(filteredRecommended.length);
    if (searchValue === '') setResultsCount(null);
  }, [searchValue, filteredRecommended, setResultsCount]);

  if (entityCtx!.searchValue !== null)
    return <EntityGrid data={filteredRecommended} trendingIsShown={false} />;

  return <EntityGrid data={entityCtx!.recommended} trendingIsShown={false} />;
};

export default RecommendedGrid;
