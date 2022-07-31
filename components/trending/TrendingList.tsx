import React from 'react';
import { entitiyList } from '../../data/data';
import EntityPreviewCard from '../EntityPreviewCard';

const TrendingList: React.FC = () => {
  return (
    <ul className="flex gap-4 items-start overflow-auto whitespace-nowrap">
      {entitiyList.map((entity, index) => {
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