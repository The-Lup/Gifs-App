import { describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';
import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphyApi } from '../api/giphy.api';
import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data';

describe('getGifsByQuery', () => {
  const axiosMock = new AxiosMockAdapter(giphyApi);
  // test('Should retunr a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('Alucard');
  //   const [gif1] = gifs;

  //   expect(gifs.length).toBe(15);

  //   expect(gif1).toStrictEqual({
  //     height: expect.any(Number),
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //   });
  // });

  test('Should return a list of gifs', async () => {
    axiosMock.onGet('/search').reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery('Alucard');

    expect(gifs.length).toBe(15);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('Should return an empty list of gifs if query is empty', async () => {
    const gifs = await getGifsByQuery('');

    expect(gifs.length).toBe(0);
  });

  test('Shoudl handle error when the API returns an error', async () => {
    const consoleErroSpy = vi.spyOn(console, 'error').mockImplementation(() => {
      // console.log('Error');
    });

    axiosMock.onGet('/search').reply(400, {
      data: {
        message: 'Bad request try again later.',
      },
    });

    const gifs = await getGifsByQuery('Alucard');
    expect(gifs.length).toBe(0);
    expect(consoleErroSpy).toHaveBeenCalled();
    expect(consoleErroSpy).toHaveBeenCalledTimes(1);
    expect(consoleErroSpy).toHaveBeenCalledWith(expect.anything());
  });
});
