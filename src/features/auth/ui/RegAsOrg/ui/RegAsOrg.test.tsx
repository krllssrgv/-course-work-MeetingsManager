import { render, screen, fireEvent } from '@testing-library/react';
import { RegAsOrg } from './RegAsOrg';
import type { Dispatch, SetStateAction } from 'react';

describe('RegAsOrg', () => {
    it('При переданном значении true элемент является отмеченным (checked)', () => {
        // arrange
        const checked = true;
        const setChecked = vi.fn() as Dispatch<SetStateAction<boolean>>;

        //act
        render(<RegAsOrg asOrg={checked} setAsOrg={setChecked} />);
        const checkedElement = screen.getByRole('checkbox');

        // assert
        expect(checkedElement).toBeChecked();
    });

    it('При клике на элемент вызывается функция изменения состояния', () => {
        // arrange
        const checked = false;
        const setChecked = vi.fn() as Dispatch<SetStateAction<boolean>>;

        // act
        render(<RegAsOrg asOrg={checked} setAsOrg={setChecked} />);
        const checkedElement = screen.getByRole('checkbox');
        fireEvent.click(checkedElement);

        // assert
        expect(setChecked).toHaveBeenCalled();
    });
});
