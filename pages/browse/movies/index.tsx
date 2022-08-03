import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import EntityGrid from '../../../components/EntityGrid';
import Heading from '../../../components/Heading';
import ResultMessage from '../../../components/ResultMessage';
import { EntityContext } from '../../../store/entityContext';

const Movies: NextPage = () => {
  const entityCtx = useContext(EntityContext);

  const { searchValue } = entityCtx!;

  const filteredMovies = entityCtx!.movies.filter((entity) =>
    entity.title
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(entityCtx!.transformedSearchValue!)
  );

  const count = searchValue === null ? null : filteredMovies.length;

  return (
    <div>
      <Head>
        <title>Movies | Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search movies"
        />
      </Head>

      <>
        <Heading as="h2">
          Movies
          {count !== null && (
            <ResultMessage
              count={filteredMovies.length}
              searchValue={entityCtx!.searchValue!}
            />
          )}
        </Heading>

        <EntityGrid
          data={
            entityCtx?.searchValue === null ? entityCtx!.movies : filteredMovies
          }
          trendingIsShown={false}
        />
      </>
    </div>
  );
};

export default Movies;
