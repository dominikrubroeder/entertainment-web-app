import React from 'react';
import RecommendedGrid from './RecommendedGrid';

const Recommended: React.FC = () => {
  return (
    <section className="pr-8">
      <h2 className="text-[2rem] mb-6">Recommended</h2>
      <RecommendedGrid />
    </section>
  );
};

export default Recommended;
