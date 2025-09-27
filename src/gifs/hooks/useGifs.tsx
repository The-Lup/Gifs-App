import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string) => {
    const term = query.trim().toLowerCase();
    if (!term) return;
    if (previousTerms.includes(term)) return;
    setPreviousTerms((prev) => {
      const updated = [term, ...prev];
      return updated.slice(0, 8);
    });

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    gifs,
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
