import { render, screen, fireEvent } from '@testing-library/react';
import { AppButton } from './AppButton';

describe('LongButton', () => {
    it('При нажатии кнопки выполняется функция func', () => {
        // arrange
        const text = 'Confirm';
        const func = vi.fn();
        const loading = false;

        // act
        render(<AppButton text={text} onClick={func} loading={loading} />);
        const button = screen.getByText('Confirm');
        fireEvent.click(button);

        // assert
        expect(func).toHaveBeenCalled();
    });

    it('При нажатии кнопки в случае заблокированной функции функция func не выполняется', () => {
        // arrange
        const text = 'Confirm';
        const func = vi.fn();
        const loading = true;

        // act
        render(<AppButton text={text} onClick={func} loading={loading} block={true} />);
        const button = screen.getByRole('button');
        const img = screen.getByRole('img');
        fireEvent.click(button);

        // assert
        expect(func).not.toHaveBeenCalled();
        expect(img).toBeInTheDocument();
        expect(button).not.toHaveTextContent(text);
    });
});
