import { useEffect, useState } from 'react';
import { selectUserData, logoutUser } from '@features';
import { useAppSelector, useAppDispatch, AppButton, API_URL } from '@shared';
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
            try {
                const response = await fetch(`${API_URL}auth/logout`, {
                    method: 'POST',
                    credentials: 'include',
                });
                setLoading(false);

                if (response.ok) {
                    dispatch(logoutUser());
                }
            } catch {
                setLoading(false);
                console.log('error');
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
