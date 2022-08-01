import React, { useContext, useEffect } from 'react';
import { EntityContext } from '../../store/entityContext';
import EntityPreviewCard from '../EntityPreviewCard';

interface TrendingListProps {
  setResultsCount: (count: number | null) => void;
}

const TrendingList: React.FC<TrendingListProps> = ({ setResultsCount }) => {
  const entityCtx = useContext(EntityContext);

  const { searchValue } = entityCtx!;

  const filteredTrending = entityCtx!.trending.filter((entity) =>
    entity.title
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(entityCtx!.transformedSearchValue!)
  );

  const listClasses = 'flex gap-4 items-start overflow-auto whitespace-nowrap';

  useEffect(() => {
    if (searchValue !== null) setResultsCount(filteredTrending.length);
    if (searchValue === null) setResultsCount(null);
  }, [searchValue, filteredTrending, setResultsCount]);

  if (entityCtx?.searchValue !== null)
    return (
      <ul className={listClasses}>
        {filteredTrending.map((entity, index) => {
          return (
            <li key={index}>
              <EntityPreviewCard data={entity} />
            </li>
          );
        })}
      </ul>
    );

  return (
    <ul className={listClasses}>
      {entityCtx!.trending.map((entity, index) => {
        return (
          <li key={index}>
            <EntityPreviewCard data={entity} />
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingList;
