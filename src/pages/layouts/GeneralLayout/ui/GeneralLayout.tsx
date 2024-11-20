import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Header, LeftMenu } from '@widgets';
import { selectUserAuth } from '@features';
import { useAppSelector, APP_ROUTES } from '@shared';
import styles from './GeneralLayout.module.scss';

export const GeneralLayout = () => {
  const user = useAppSelector(selectUserAuth);
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
      <div className={styles.container}>
        <Header />
        <div className={styles.page}>
          <LeftMenu />

          <main className={styles.content}>
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
};
