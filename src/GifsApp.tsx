import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { CustomSearchBar } from './shared/components/CustomSearchBar';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        tittle="GIF searcher"
        description="Discover and share the perfect GIF"
      />

      {/* Search */}
      <CustomSearchBar placeholder="Search anything…" onQuery={handleSearch} />

      {/* Previous searches */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
