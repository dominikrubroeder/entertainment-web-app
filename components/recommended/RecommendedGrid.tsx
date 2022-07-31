import React from 'react';
import { entitiyList } from '../../data/data';
import EntityPreviewCard from '../EntityPreviewCard';

const RecommendedGrid: React.FC = () => {
  return (
    <ul className="grid grid-cols-4 gap-y-8 gap-10">
      {entitiyList.map((entity, index) => {
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
