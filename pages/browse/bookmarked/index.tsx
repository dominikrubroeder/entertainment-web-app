import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import CountBadge from '../../../components/CountBadge';
import EntityGrid from '../../../components/EntityGrid';
import Heading from '../../../components/Heading';
import ResultMessage from '../../../components/ResultMessage';
import { EntityContext } from '../../../store/entityContext';

const Bookmarked: NextPage = () => {
  const entityCtx = useContext(EntityContext);

  const { searchValue } = entityCtx!;

  const filteredBookmarkedMovies = entityCtx!.bookmarkedMovies.filter(
    (entity) =>
      entity.title
        .toLowerCase()
        .replaceAll(' ', '')
        .includes(entityCtx!.transformedSearchValue!)
  );

  const filteredBookmarkedMoviesCount =
    searchValue === null ? null : filteredBookmarkedMovies.length;

  const filteredBookmarkedTvSeries = entityCtx!.bookmarkedTvSeries.filter(
    (entity) =>
      entity.title
        .toLowerCase()
        .replaceAll(' ', '')
        .includes(entityCtx!.transformedSearchValue!)
  );

  const filteredBookmarkedTvSeriesCount =
    searchValue === null ? null : filteredBookmarkedTvSeries.length;

  const pageContent =
    entityCtx?.bookmarkedCount === 0 ? (
      <Heading>No bookmarked items.</Heading>
    ) : (
      <section className="flex flex-col gap-8">
        {entityCtx!.bookmarkedMoviesCount > 0 && (
          <section>
            <Heading as="h2">
              Bookmarked Movies
              {entityCtx?.searchValue === null ? (
                <CountBadge>{entityCtx?.bookmarkedMoviesCount}</CountBadge>
              ) : (
                <ResultMessage
                  count={filteredBookmarkedMoviesCount!}
                  searchValue={searchValue!}
                />
              )}
            </Heading>

            <EntityGrid
              data={
                entityCtx?.searchValue === null
                  ? entityCtx!.bookmarkedMovies
                  : filteredBookmarkedMovies
              }
              trendingIsShown={false}
            />
          </section>
        )}

        {entityCtx!.bookmarkedTvSeriesCount > 0 && (
          <section>
            <Heading as="h2">
              Bookmarked TV Series
              {entityCtx?.searchValue === null ? (
                <CountBadge>{entityCtx?.bookmarkedTvSeriesCount}</CountBadge>
              ) : (
                <ResultMessage
                  count={filteredBookmarkedTvSeriesCount!}
                  searchValue={searchValue!}
                />
              )}
            </Heading>

            <EntityGrid
              data={
                entityCtx?.searchValue === null
                  ? entityCtx!.bookmarkedTvSeries
                  : filteredBookmarkedTvSeries
              }
              trendingIsShown={false}
            />
          </section>
        )}
      </section>
    );

  return (
    <div>
      <Head>
        <title>Bookmarked | Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search bookmarked"
        />
      </Head>

      {pageContent}
    </div>
  );
};

export default Bookmarked;
