import { useEffect } from 'react';
import { OrganizationsList } from '@widgets';

export const OrganizationsPage = () => {
    useEffect(() => {
        document.title = 'Ваши организации';
    }, []);

    return <OrganizationsList />;
};
