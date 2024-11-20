import { useEffect } from 'react';
import { Outlet, useLocation, Link, Navigate } from 'react-router-dom';
import cn from 'classnames';
import Cookies from 'js-cookie'; 
import { selectUserAuth, fetchUser, setToken } from '@features';
import { APP_ROUTES, useAppSelector, useAppDispatch, Waiting } from '@shared';
import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
  const location = useLocation();
  const user = useAppSelector(selectUserAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token && (!user.token)) {
      dispatch(setToken(token));
    }
  }, [dispatch, user.token]);

  useEffect(() => {
    if ((!user.wasLoaded) && (user.token)) {
      dispatch(fetchUser());
    }
  }, [dispatch, user.token, user.wasLoaded]);

  if (user.wasLoaded) {
    return <Navigate to={APP_ROUTES.organizations} replace />;
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
