import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import EntityGrid from '../../components/EntityGrid';
import { EntityCategory } from '../../data/data';
import { EntityContext } from '../../store/entityContext';

const Movies: NextPage = () => {
  const entityCtx = useContext(EntityContext);

  return (
    <div>
      <Head>
        <title>Movies - Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search movies"
        />
      </Head>

      <div className="pl-4 md:pl-8">
        <h2 className="text-[2rem] mb-6">Movies</h2>

        <EntityGrid data={entityCtx!.movies} trendingIsShown={false} />
      </div>
    </div>
  );
};

export default Movies;
