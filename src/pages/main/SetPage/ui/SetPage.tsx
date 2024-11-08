import { useEffect } from 'react';

export const SetPage = () => {
    useEffect(() => {
        document.title = 'Выбрать организацию ';
    }, []);

    return <></>;
};
