import { useEffect, useState } from 'react';
import { TrackJS } from 'trackjs';
import { selectUserData, logoutUser, resetState } from '@features';
import {
  useAppSelector,
  useAppDispatch,
  AppButton,
  API_URL,
  metrics,
} from '@shared';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const user = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  const onLogout = () => {
    const fetchLogout = async () => {
      setLoading(true);
      metrics.metricLogout();

      try {
        const response = await fetch(`${API_URL}auth/logout`, {
          method: 'POST',
          credentials: 'include',
        });
        setLoading(false);

        if (response.ok) {
          dispatch(logoutUser());
          dispatch(resetState());
        }
      } catch (error) {
        setLoading(false);
        const e = error as Error;
        TrackJS.track(e);
      }
    };

    fetchLogout();
  };

  return (
    <div className={styles.container}>
      <p className={styles.data}>{user.name}</p>
      <p className={styles.data}>{user.lastname}</p>
      <p className={styles.data}>{user.fathername}</p>
      <AppButton
        text="Выйти"
        onClick={onLogout}
        loading={loading}
        negative={true}
      />
    </div>
  );
};
