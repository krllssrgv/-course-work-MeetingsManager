import { render, screen, fireEvent } from '@testing-library/react';
import { LongButton } from './LongButton';

describe('LongButton', () => {
    it('При нажатии кнопки выполняется функция func', () => {
        // arrange
        const text = 'Confirm';
        const func = vi.fn();
        const loading = false;

        // act
        render(<LongButton text={text} func={func} loading={loading} />);
        const button = screen.getByText('Confirm');
        fireEvent.click(button);

        // assert
        expect(func).toHaveBeenCalled();
    });

    it('При loading = true внутри кнопки находится img и при нажатии функция func не вызывается', () => {
        // arrange
        const text = 'Confirm';
        const func = vi.fn();
        const loading = true;

        // act
        render(<LongButton text={text} func={func} loading={loading} />);
        const button = screen.getByRole('button');
        const img = screen.getByRole('img');
        fireEvent.click(button);

        // assert
        expect(func).not.toHaveBeenCalled();
        expect(img).toBeInTheDocument();
        expect(button).not.toHaveTextContent(text);
    });
});
