import { useEffect } from 'react';
import { Creator } from '@widgets';

export const CreateMeetingPage = () => {
    useEffect(() => {
        document.title = 'Создание';
    }, []);

    return <Creator />;
};
