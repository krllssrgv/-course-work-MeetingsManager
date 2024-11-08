import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput';
import userEvent from '@testing-library/user-event';
import type { Dispatch, SetStateAction } from 'react';

describe('TextInput', () => {
    it('При пустом value поле ввода текста пустое, а label содержит переданный текст', () => {
        // arrange
        const type = 'text';
        const name = 'email';
        const label = 'Email';
        const value = '';
        const setValue = vi.fn() as Dispatch<SetStateAction<string>>;

        // act
        render(
            <TextInput
                type={type}
                name={name}
                value={value}
                label={label}
                setValue={setValue}
            />
        );
        const inputElement = screen.getByTestId('input');
        const labelElement = screen.getByTestId('label');

        // assert
        expect(inputElement).toHaveValue(value);
        expect(labelElement).toHaveTextContent(label);
    });

    it('При вводе значения функция изменения состояния будет вызвана', async () => {
        // arrange
        const type = 'text';
        const name = 'email';
        const label = 'Email';
        const value = '';
        const setValue = vi.fn() as Dispatch<SetStateAction<string>>;
        const typedText = 'It typed this text';

        // act
        render(
            <TextInput
                type={type}
                name={name}
                value={value}
                label={label}
                setValue={setValue}
            />
        );
        const inputElement = screen.getByTestId('input');
        await userEvent.type(inputElement, typedText);

        // assert
        expect(setValue).toHaveBeenCalled();
    });
});
