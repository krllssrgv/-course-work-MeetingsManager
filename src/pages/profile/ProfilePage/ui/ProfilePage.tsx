import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { selectUserData, logoutUser, resetState } from '@features';
import {
  useAppSelector,
  useAppDispatch,
  AppButton,
  metrics,
} from '@shared';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const user = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  const handleLogout = async () => {
      metrics.metricLogout();
      Cookies.remove('access_token');
      dispatch(logoutUser());
      dispatch(resetState());
  };

  return (
    <div className={styles.container}>
      <p className={styles.data}>{user.name}</p>
      <p className={styles.data}>{user.lastname}</p>
      <p className={styles.data}>{user.fathername}</p>
      <AppButton
        text="Выйти"
        onClick={handleLogout}
        loading={false}
        negative
      />
    </div>
  );
};
