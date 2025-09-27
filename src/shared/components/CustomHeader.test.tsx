import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';

  test('Should render the title correctly', () => {
    render(<CustomHeader tittle={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test('Should render the description when provided', () => {
    const description = 'Test Description';
    render(<CustomHeader tittle={title} description={description} />);
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('Should not render description when not provided', () => {
    const { container } = render(<CustomHeader tittle={title} />);

    const divElement = container.querySelector('.content-center');

    const h1 = divElement?.querySelector('h1');

    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');
    expect(p).toBeNull();
  });
});
