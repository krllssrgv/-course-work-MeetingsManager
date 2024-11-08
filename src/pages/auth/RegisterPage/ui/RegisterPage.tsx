import { useEffect } from 'react';
import { RegisterWindow } from '@widgets';

export const RegisterPage = () => {
    useEffect(() => {
        document.title = 'Регистрация';
    }, []);

    return (
        <>
            <RegisterWindow />
        </>
    );
};
