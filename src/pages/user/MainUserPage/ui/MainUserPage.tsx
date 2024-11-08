import { useEffect } from 'react';

export const MainUserPage = () => {
    useEffect(() => {
        document.title = 'Главная';
    }, []);

    return <></>;
};
