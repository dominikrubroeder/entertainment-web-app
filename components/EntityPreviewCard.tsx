import React from 'react';
import Image from 'next/image';
import { Entity, EntityCategory } from '../data/data';
import IconMovies from './icons/IconMovies';
import IconTvSeries from './icons/IconTvSeries';
import IconBookmarkFill from './icons/IconBookmarkFill';
import IconBookmarkEmpty from './icons/IconBookmarkEmpty';
import IconPlay from './icons/IconPlay';

interface EntityPreviewCardProps {
  data: Entity;
}

const EntityPreviewCard: React.FC<EntityPreviewCardProps> = ({ data }) => {
  const bookmark = (
    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-app-blue-900/50 z-50 flex items-center justify-center cursor-pointer">
      {data.isBookmarked ? <IconBookmarkFill /> : <IconBookmarkEmpty />}
    </div>
  );

  const playOverlay = (
    <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center w-full h-full opacity-0 invisible z-30 group-hover:opacity-100 group-hover:visible">
      <button className="flex gap-2 items-center justify-center rounded-full bg-white/25 text-lg font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 z-40">
        <IconPlay /> Play
      </button>
    </div>
  );

  if (data.isTrending)
    return (
      <div className="group relative flex justify-end flex-col gap-2 w-[29.375rem] h-[14.375rem] rounded-xl cursor-pointer">
        <div className="z-10 bg-gradient-to-b from-black/0 to-black/75 p-6 rounded-b-xl">
          <ul className="flex items-center gap-2 text-xs">
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
          priority
        />

        {bookmark}

        {playOverlay}
      </div>
    );

  return (
    <div className="group cursor-pointer">
      <div className="relative">
        {playOverlay}

        <Image
          src={data.thumbnail.regular.large}
          layout="responsive"
          alt={`${data.title} thumbnail`}
          className="rounded-xl"
          width={280}
          height={174}
          priority
        />
        {bookmark}
      </div>

      <div className="mt-2">
        <ul className="flex items-center gap-2 text-xs">
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
        <h3 className="text-lg font-bold">{data.title}</h3>
      </div>
    </div>
  );
};

export default EntityPreviewCard;
