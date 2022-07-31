import React, { useState, createContext } from 'react';
import { Entity, EntityContextType, initialEntities } from '../data/data';

export const EntityContext = createContext<EntityContextType | null>(null);

type EntityProviderProps = {
  children?: React.ReactNode;
};

const EntityProvider: React.FC<EntityProviderProps> = ({ children }) => {
  const [entities, setEntities] = useState<Entity[]>(initialEntities);

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
        toggleBookmarked,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export default EntityProvider;
