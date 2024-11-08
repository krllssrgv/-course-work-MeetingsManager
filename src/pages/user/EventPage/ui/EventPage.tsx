import { useEffect } from 'react';

export const EventPage = () => {
    useEffect(() => {
        document.title = '{Название мероприятия}';
    }, []);

    return <></>;
};
