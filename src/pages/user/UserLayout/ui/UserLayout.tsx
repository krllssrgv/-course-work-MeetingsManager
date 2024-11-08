import { Outlet, Navigate } from 'react-router-dom';
import { selectUser } from '@entities';
import { useAppSelector, APP_ROUTES } from '@shared';

export const UserLayout = () => {
    const user = useAppSelector(selectUser);

    if (!user.wasLoaded) {
        return <Navigate to={APP_ROUTES.login} replace />;
    } else {
        return (
            <>
                <Outlet />
            </>
        );
    }
};
