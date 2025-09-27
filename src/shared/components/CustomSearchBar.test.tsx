import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CustomSearchBar } from './CustomSearchBar';

describe('CustomSearchBar', () => {
  test('Should render searchbar with defaul values', () => {
    const { container } = render(<CustomSearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('Should call onQuery with a the correct value after 700ms', async () => {
    const onQuery = vi.fn();
    render(<CustomSearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('Should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    render(<CustomSearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('Should call onQuery when button clicked with the input value', () => {
    const onQuery = vi.fn();
    render(<CustomSearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });

  test('Should the input has the correct placeholder value', () => {
    const value = 'Search your gif';

    render(<CustomSearchBar onQuery={() => {}} placeholder={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });
});
