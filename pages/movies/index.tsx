import type { NextPage } from 'next';
import Head from 'next/head';
import EntityGrid from '../../components/EntityGrid';
import { entitiyList, EntityCategory } from '../../data/data';

const Movies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Movies - Web entertainment app | frontendmentor.io</title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder | Search movies"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon-32x32.png"
          sizes="32x32"
        />
      </Head>

      <>
        <h2 className="text-[2rem] mb-6">Movies</h2>

        <EntityGrid
          data={entitiyList.filter(
            (entity) => entity.category === EntityCategory.movie
          )}
          trendingIsShown={false}
        />
      </>
    </div>
  );
};

export default Movies;
