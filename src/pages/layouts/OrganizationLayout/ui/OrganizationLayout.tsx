import { Outlet, Navigate, useParams } from 'react-router-dom';
import { selectUserOrgs } from '@features';
import { useAppSelector, APP_ROUTES } from '@shared';

export const OrganizationLayout = () => {
    const organizations = useAppSelector(selectUserOrgs);
    const { id } = useParams();
    const organizationID = Number(id);

    if (organizationID && organizations[organizationID]) {
        return <Outlet />;
    } else {
        return <Navigate to={APP_ROUTES.organizations} replace />;
    }
};
