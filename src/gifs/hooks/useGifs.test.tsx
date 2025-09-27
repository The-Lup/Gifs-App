import { act, renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import * as gifActions from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {
  test('Should return defaulf values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test('Should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('alucard');
    });

    expect(result.current.gifs.length).toBe(15);
  });

  test('Should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('alucard');
    });

    expect(result.current.gifs.length).toBe(15);
  });

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('alucard');
    });

    expect(result.current.gifs.length).toBe(15);

    //Move this top after const {result} if u wanna see the error
    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
      new Error('Error')
    );

    await act(async () => {
      await result.current.handleTermClicked('alucard');
    });

    expect(result.current.gifs.length).toBe(15);
  });

  test('should return no more than 8 previous terms', async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch('Evangelion');
      await result.current.handleSearch('One Piece');
      await result.current.handleSearch('Dragon Ball Z');
      await result.current.handleSearch('Monster');
      await result.current.handleSearch('Naruto');
      await result.current.handleSearch('Hellsing Ultimate');
      await result.current.handleSearch('Gachiakuta');
      await result.current.handleSearch('Vinland saga');
      await result.current.handleSearch('Sword Art Online');
    });

    // console.log(result.current.previousTerms);
    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      'sword art online',
      'vinland saga',
      'gachiakuta',
      'hellsing ultimate',
      'naruto',
      'monster',
      'dragon ball z',
      'one piece',
    ]);
  });
});
