import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import EntityGrid from '../../components/EntityGrid';
import { EntityCategory } from '../../data/data';
import { EntityContext } from '../../store/entityContext';

const Bookmarked: NextPage = () => {
  const entityCtx = useContext(EntityContext);

  if (entityCtx?.bookmarkedCount === 0)
    return (
      <div>
        <Head>
          <title>Bookmarked - Web entertainment app | frontendmentor.io</title>
          <meta
            name="description"
            content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search bookmarked"
          />
        </Head>

        <h1>No bookmarked items.</h1>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Bookmarked - Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search bookmarked"
        />
      </Head>

      <section className="flex flex-col gap-8">
        {entityCtx!.bookmarkedMoviesCount > 0 && (
          <section>
            <h2 className="text-[2rem] mb-6 flex items-center gap-4">
              Bookmarked Movies
              <span className="text-xs font-bold text-app-primary-red pt-1.5">
                {entityCtx?.bookmarkedMoviesCount}
              </span>
            </h2>
            <EntityGrid
              data={entityCtx!.bookmarkedMovies}
              trendingIsShown={false}
            />
          </section>
        )}

        {entityCtx!.bookmarkedTvSeriesCount > 0 && (
          <section>
            <h2 className="text-[2rem] mb-6 flex items-center gap-4">
              Bookmarked TV Series
              <span className="text-xs font-bold text-app-primary-red pt-1.5">
                {entityCtx?.bookmarkedTvSeriesCount}
              </span>
            </h2>
            <EntityGrid
              data={entityCtx!.bookmarkedTvSeries}
              trendingIsShown={false}
            />
          </section>
        )}
      </section>
    </div>
  );
};

export default Bookmarked;
