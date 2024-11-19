import { useEffect } from 'react';
import { Creator } from '@widgets';

export const CreateMeetingPage = () => {
    useEffect(() => {
        document.title = 'Создание встречи';
    }, []);

    return <Creator />;
};
