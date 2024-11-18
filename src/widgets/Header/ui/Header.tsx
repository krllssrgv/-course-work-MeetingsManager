import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';
import { headerProfile, APP_ROUTES, HeaderLink } from '@shared';
import styles from './Header.module.scss';

export const Header = () => {
    const location = useLocation();
    const currentFirstPath = location.pathname.split('/').slice(0, 2).join('/');

    return (
        <header className={styles.header}>
            <Link to={APP_ROUTES.main} className={styles.logo}>
                <p>Meetings</p>
                <p>Manager</p>
            </Link>

            <nav className={styles.links}>
                <div className={styles.left_links}>
                    <HeaderLink
                        to={APP_ROUTES.main}
                        text="Главная"
                        active={currentFirstPath === APP_ROUTES.main}
                    />
                    <HeaderLink
                        to={APP_ROUTES.organizations}
                        text="Организации"
                        active={
                            currentFirstPath === APP_ROUTES.organizations ||
                            currentFirstPath === APP_ROUTES.organization()
                        }
                    />
                </div>

                <Link
                    to={APP_ROUTES.profile}
                    className={cn(
                        styles.profile_link,
                        currentFirstPath === APP_ROUTES.profile
                            ? styles.profile_link_active
                            : null
                    )}
                >
                    <img src={headerProfile} alt="Profile" />
                </Link>
            </nav>
        </header>
    );
};
