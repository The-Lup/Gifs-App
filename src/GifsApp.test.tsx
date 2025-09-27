import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
  test('Should render component properly', () => {
    console.log('Hello from GifsApp.test');

    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });
});
