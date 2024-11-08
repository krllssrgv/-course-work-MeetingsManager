import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '@entities';
import { useAppSelector, APP_ROUTES } from '@shared';

export const GeneralLayout = () => {
    const user = useAppSelector(selectUser);
    const location = useLocation();

    if (!user.wasLoaded) {
        return (
            <Navigate
                to={APP_ROUTES.login}
                state={{ from: location.pathname }}
                replace
            />
        );
    } else {
        return (
            <>
                <Outlet />
            </>
        );
    }
};
