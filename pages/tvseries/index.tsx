import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import EntityGrid from '../../components/EntityGrid';
import ResultMessage from '../../components/ResultMessage';
import { EntityContext } from '../../store/entityContext';

const TvSeries: NextPage = () => {
  const entityCtx = useContext(EntityContext);

  const { searchValue } = entityCtx!;

  const filteredTvSeries = entityCtx!.tvseries.filter((entity) =>
    entity.title
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(entityCtx!.transformedSearchValue!)
  );

  const count = searchValue === null ? null : filteredTvSeries.length;

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
        <h2 className="text-[2rem] mb-6 flex items-center gap-4">
          TV Series
          {count !== null && (
            <ResultMessage
              count={filteredTvSeries.length}
              searchValue={entityCtx!.searchValue!}
            />
          )}
        </h2>

        <EntityGrid
          data={
            entityCtx?.searchValue === null
              ? entityCtx!.tvseries
              : filteredTvSeries
          }
          trendingIsShown={false}
        />
      </>
    </div>
  );
};

export default TvSeries;
