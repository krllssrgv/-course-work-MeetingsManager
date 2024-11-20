import { Outlet, Navigate } from 'react-router-dom';
import { Header, LeftMenu } from '@widgets';
import { selectUserAuth } from '@features';
import { useAppSelector, APP_ROUTES } from '@shared';
import styles from './GeneralLayout.module.scss';

export const GeneralLayout = () => {
  const user = useAppSelector(selectUserAuth);

  if (!user.wasLoaded) {
    return <Navigate to={APP_ROUTES.login} replace />;
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
