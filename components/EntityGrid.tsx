import React from 'react';
import { Entity } from '../data/data';
import EntityPreviewCard from './EntityPreviewCard';

interface EntityGridProps {
  data: Entity[];
  trendingIsShown?: boolean;
}

const EntityGrid: React.FC<EntityGridProps> = ({
  data,
  trendingIsShown = true,
}) => {
  return (
    <ul className="grid grid-cols-4 gap-y-8 gap-10">
      {data.map((entity, index) => {
        return (
          <li key={index}>
            <EntityPreviewCard
              data={entity}
              trendingIsShown={trendingIsShown}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EntityGrid;
