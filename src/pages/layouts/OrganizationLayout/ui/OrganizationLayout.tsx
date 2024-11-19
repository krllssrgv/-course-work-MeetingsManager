import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { APP_ROUTES, Waiting } from '@shared';
import { useOrganizationData } from '../model/useOrganizationData';

export const OrganizationLayout = () => {
    const { doesExist, getOrganization, loading } = useOrganizationData();

    useEffect(() => {
        getOrganization();
    }, [getOrganization]);

    if (doesExist) {
        if (loading) {
            return <Waiting />;
        } else {
            return <Outlet />;
        }
    } else {
        return <Navigate to={APP_ROUTES.organizations} replace />;
    }
};
