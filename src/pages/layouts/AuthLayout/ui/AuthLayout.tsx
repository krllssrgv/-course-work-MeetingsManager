import { useEffect } from 'react';
import { Outlet, useLocation, Link, Navigate } from 'react-router-dom';
import cn from 'classnames';
import { selectUserAuth, fetchUser } from '@features';
import { APP_ROUTES, useAppSelector, useAppDispatch, Waiting } from '@shared';
import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
  const location = useLocation();
  const fromPage = location.state?.from;
  const user = useAppSelector(selectUserAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.wasLoaded) {
      dispatch(fetchUser());
    }
  }, [dispatch, user.wasLoaded]);

  if (user.wasLoaded) {
    const to = user.itWasLogout
      ? APP_ROUTES.organizations
      : fromPage || APP_ROUTES.organizations;
    return <Navigate to={to} replace />;
  } else {
    if (user.tryToFetch) {
      return <Waiting />;
    } else {
      return (
        <section className={styles.auth_window}>
          <div className={styles.switcher}>
            <Link
              to={APP_ROUTES.login}
              className={cn(
                styles.link,
                location.pathname === APP_ROUTES.login
                  ? styles.link_active
                  : null
              )}
            >
              Вход
            </Link>
            <Link
              to={APP_ROUTES.register}
              className={cn(
                styles.link,
                location.pathname === APP_ROUTES.register
                  ? styles.link_active
                  : null
              )}
            >
              Регистрация
            </Link>
          </div>
          <h1 className={styles.headline}>
            {location.pathname === APP_ROUTES.login ? 'Вход' : 'Регистрация'}
          </h1>
          <Outlet />
        </section>
      );
    }
  }
};
