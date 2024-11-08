import { useEffect } from 'react';
import { LoginWindow } from '@widgets';

export const LoginPage = () => {
    useEffect(() => {
        document.title = 'Вход в аккаунт';
    }, []);

    return (
        <>
            <LoginWindow />
        </>
    );
};
