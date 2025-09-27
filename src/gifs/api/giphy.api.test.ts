import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('giphyApi', () => {
  test('Should be configured correctly', () => {
    const params = giphyApi.defaults.params;

    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(params.lang).toBe('en');
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      lang: 'en',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
