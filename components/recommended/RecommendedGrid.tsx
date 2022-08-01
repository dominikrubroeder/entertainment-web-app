import React, { useContext } from 'react';
import { EntityContext } from '../../store/entityContext';
import EntityGrid from '../EntityGrid';
import EntityPreviewCard from '../EntityPreviewCard';

const RecommendedGrid: React.FC = () => {
  const entityCtx = useContext(EntityContext);

  return (
    <EntityGrid
      data={entityCtx!.entities.filter((entity) => !entity.isTrending)}
      trendingIsShown={false}
    />
  );
};

export default RecommendedGrid;
