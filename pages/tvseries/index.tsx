import type { NextPage } from 'next';
import Head from 'next/head';
import EntityGrid from '../../components/EntityGrid';
import { entitiyList, EntityCategory } from '../../data/data';

const TvSeries: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TV Series - Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search TV Series"
        />
      </Head>

      <>
        <h2 className="text-[2rem] mb-6">TV Series</h2>

        <EntityGrid
          data={entitiyList.filter(
            (entity) => entity.category === EntityCategory.tv_series
          )}
          trendingIsShown={false}
        />
      </>
    </div>
  );
};

export default TvSeries;
