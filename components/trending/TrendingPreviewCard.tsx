import Image from 'next/image';
import React from 'react';
import { EntityCategory, Entity } from '../../data/data';
import IconMovies from '../icons/IconMovies';
import IconTvSeries from '../icons/IconTvSeries';

interface TrendingPreviewCard {
  data: Entity;
}

const TrendingPreviewCard: React.FC<TrendingPreviewCard> = ({ data }) => {
  return (
    <div className="relative flex justify-end flex-col gap-2 w-[29.375rem] h-[14.375rem] rounded-xl">
      <div className="z-10 bg-gradient-to-b from-black/0 to-black/75 p-6 rounded-b-xl">
        <ul className="flex items-center gap-2">
          <li>{data.year}</li>
          <li className="w-[0.1875rem] h-[0.1875rem] rounded-full bg-white"></li>
          <li className="flex items-center gap-2">
            {data.category === EntityCategory.movie ? (
              <IconMovies />
            ) : (
              <IconTvSeries />
            )}
            {data.category}
          </li>
          <li className="w-[0.1875rem] h-[0.1875rem] rounded-full bg-white"></li>
          <li>{data.rating}</li>
        </ul>
        <h3 className="text-2xl font-bold">{data.title}</h3>
      </div>

      <Image
        src={data.thumbnail.trending!.large}
        layout="fill"
        alt={`${data.title} thumbnail`}
        className="rounded-xl"
      />
    </div>
  );
};

export default TrendingPreviewCard;
