import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { defaultEntities } from '../../data/data';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  BeakerIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

export default function WatchPage() {
  const router = useRouter();
  const watchID = router.query.watchID;
  const watchData =
    defaultEntities.find(
      (entity) => entity.title.toLowerCase().replaceAll(' ', '') === watchID
    ) ?? defaultEntities[0];

  useEffect(() => console.log(watchData), [watchData]);

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <AnimatePresence>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ type: 'tween' }}
          className='relative h-screen w-screen'
        >
          <Image
            src={watchData?.thumbnail.regular.large}
            alt={watchData.title}
            layout='fill'
            className='object-cover'
          />
        </motion.div>
      </AnimatePresence>

      <div
        className='absolute left-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/30 backdrop-blur-sm'
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className='h-5 w-5 text-white' />
      </div>

      <div
        className='absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/30 backdrop-blur-sm'
        onClick={() => router.back()}
      >
        <XMarkIcon className='h-5 w-5 text-white' />
      </div>

      <div className='absolute bottom-0 left-0 flex h-[35vh] w-full flex-col justify-end gap-8 bg-gradient-to-t from-black to-black/0 p-4'>
        <div className='grid w-max items-start justify-start gap-4'>
          <h1 className='text-9xl font-bold'>{watchData.title}</h1>

          <div className='flex flex-wrap gap-4'>
            <ul className='order-1 flex justify-end gap-1 sm:order-2'>
              <li>
                <span className='rounded-xl bg-white/30 p-2 text-xs uppercase tracking-wide backdrop-blur-sm'>
                  {watchData.year}
                </span>
              </li>
              <li>
                <span className='h-2 w-2 shrink-0 rounded-full bg-white/30 backdrop-blur-sm'></span>
              </li>
              <li>
                <span className='rounded-xl bg-white/30 p-2 text-xs uppercase tracking-wide backdrop-blur-sm'>
                  {watchData.rating}
                </span>
              </li>
              <li>
                <span className='h-2 w-2 rounded-full bg-white/30 backdrop-blur-sm'></span>
              </li>
              <li>
                <span className='rounded-xl bg-white/30 p-2 text-xs uppercase tracking-wide backdrop-blur-sm'>
                  Losless Streaming
                </span>
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>

        <div className='flex w-full items-center gap-4'>
          <span>00:00:00</span>
          <span className='flex h-8 w-8 items-center justify-center rounded-full bg-app-primary-red'>
            <PlayIcon className='h-5 w-5 text-white' />
          </span>
          <div className='relative flex-1'>
            <div className='absolute left-0 bottom-0 h-1 w-[1%] rounded-full bg-app-primary-red'></div>
            <div className='h-1 w-full flex-1 rounded-full bg-app-primary-red/20'></div>
          </div>
          <span>02:00:00</span>
        </div>
      </div>
    </div>
  );
}
