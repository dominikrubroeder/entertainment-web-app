import React, { useContext } from 'react';
import { EntityContext } from '../../store/entityContext';
import EntityPreviewCard from '../EntityPreviewCard';

const TrendingList: React.FC = () => {
  const entityCtx = useContext(EntityContext);

  return (
    <ul className="flex gap-4 items-start overflow-auto whitespace-nowrap">
      {entityCtx!.entities.map((entity, index) => {
        if (entity.isTrending) {
          return (
            <li key={index}>
              <EntityPreviewCard data={entity} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default TrendingList;
