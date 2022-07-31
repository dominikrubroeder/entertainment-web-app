import type { NextPage } from 'next';
import Head from 'next/head';
import EntityGrid from '../../components/EntityGrid';
import { entitiyList, EntityCategory } from '../../data/data';

const Bookmarked: NextPage = () => {
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
        <section>
          <h2 className="text-[2rem] mb-6">Bookmarked Movies</h2>
          <EntityGrid
            data={entitiyList.filter(
              (entity) =>
                entity.category === EntityCategory.movie && entity.isBookmarked
            )}
            trendingIsShown={false}
          />
        </section>

        <section>
          <h2 className="text-[2rem] mb-6">Bookmarked TV Series</h2>
          <EntityGrid
            data={entitiyList.filter(
              (entity) =>
                entity.category === EntityCategory.tv_series &&
                entity.isBookmarked
            )}
            trendingIsShown={false}
          />
        </section>
      </section>
    </div>
  );
};

export default Bookmarked;
