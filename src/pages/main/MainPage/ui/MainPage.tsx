import { useEffect } from 'react';

export const MainPage = () => {
    useEffect(() => {
        document.title = 'Главная';
    }, []);

    return <></>;
};
