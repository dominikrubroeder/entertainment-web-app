import React from 'react';
import { entitiyList, Entity } from '../../data/data';
import TrendingPreviewCard from './TrendingPreviewCard';

const TrendingList: React.FC = () => {
  return (
    <ul className="flex gap-4 items-start overflow-auto whitespace-nowrap">
      {entitiyList.map((entity, index) => {
        if (entity.isTrending) {
          return (
            <li key={index}>
              <TrendingPreviewCard data={entity} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default TrendingList;
