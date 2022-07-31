import React, { useContext } from 'react';
import { EntityContext } from '../../store/entityContext';
import EntityPreviewCard from '../EntityPreviewCard';

const RecommendedGrid: React.FC = () => {
  const entityCtx = useContext(EntityContext);

  return (
    <ul className="grid grid-cols-4 gap-y-8 gap-10">
      {entityCtx!.entities.map((entity, index) => {
        if (!entity.isTrending) {
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

export default RecommendedGrid;
