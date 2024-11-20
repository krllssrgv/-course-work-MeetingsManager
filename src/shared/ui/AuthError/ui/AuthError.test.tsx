import { render, screen } from '@testing-library/react';
import { AuthError } from './AuthError';

describe('AuthError', () => {
  it('При отсутствии текста ошибки элемент существует', () => {
    // arrange
    const value = '';

    // act
    render(<AuthError error={value} />);
    const errorElement = screen.getByTestId('error-div');

    // assert
    expect(errorElement).toBeInTheDocument();
  });

  it('Если текст передан, то элемент отображает его', () => {
    // arrange
    const value = 'Ошибка подключения';

    // act
    render(<AuthError error={value} />);
    const errorElement = screen.getByTestId('error-div');

    // assert
    expect(errorElement).toHaveTextContent(value);
  });
});
