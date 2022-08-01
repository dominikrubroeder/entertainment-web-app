import React, { useState, createContext } from 'react';
import {
  Entity,
  EntityCategory,
  EntityContextType,
  initialEntities,
} from '../data/data';

export const EntityContext = createContext<EntityContextType | null>(null);

type EntityProviderProps = {
  children?: React.ReactNode;
};

const EntityProvider: React.FC<EntityProviderProps> = ({ children }) => {
  const [entities, setEntities] = useState<Entity[]>(initialEntities);

  const movies = entities.filter(
    (entity) => entity.category === EntityCategory.movie
  );

  const tvseries = entities.filter(
    (entity) => entity.category === EntityCategory.tv_series
  );

  const trending = entities.filter((entity) => entity.isTrending);

  const bookmarked = entities.filter((entity) => entity.isBookmarked);

  const bookmarkedMovies = entities.filter(
    (entity) => entity.isBookmarked && entity.category === EntityCategory.movie
  );

  const bookmarkedTvSeries = entities.filter(
    (entity) =>
      entity.isBookmarked && entity.category === EntityCategory.tv_series
  );

  const bookmarkedCount = entities.filter(
    (entity) => entity.isBookmarked
  ).length;

  const bookmarkedMoviesCount = entities.filter(
    (entity) => entity.isBookmarked && entity.category === EntityCategory.movie
  ).length;

  const bookmarkedTvSeriesCount = entities.filter(
    (entity) =>
      entity.isBookmarked && entity.category === EntityCategory.tv_series
  ).length;

  const toggleBookmarked = (entityId: string) => {
    entities.map((entity) => {
      if (entity.title + entity.year === entityId) {
        entity.isBookmarked = !entity.isBookmarked;
        setEntities([...entities]);
      }
    });
  };

  return (
    <EntityContext.Provider
      value={{
        entities,
        movies,
        tvseries,
        trending,
        bookmarked,
        bookmarkedMovies,
        bookmarkedTvSeries,
        bookmarkedCount,
        bookmarkedMoviesCount,
        bookmarkedTvSeriesCount,
        toggleBookmarked,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export default EntityProvider;
