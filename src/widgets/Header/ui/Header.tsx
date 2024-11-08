import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HeaderLink } from "@features";
import { headerProfile, APP_ROUTES } from "@shared";
import styles from './Header.module.scss';


export const Header = () => {
    const location = useLocation();
    const currentFirstPath = location.pathname.split('/').slice(0, 2).join('/');


    return <header className={styles.header}>
        <div className={styles.logo}>
            <p>Meetings</p>
            <p>Manager</p>
        </div>

        <nav className={styles.links}>
            <div className={styles.left_links}>
                <HeaderLink to={APP_ROUTES.main} text='Главная' active={currentFirstPath === APP_ROUTES.main} />
                <HeaderLink to={APP_ROUTES.control} text='Управление' active={currentFirstPath === APP_ROUTES.control} />
                <HeaderLink to={APP_ROUTES.meetings} text='Встречи' active={currentFirstPath === APP_ROUTES.meetings} />
            </div>
            
            <Link to={APP_ROUTES.profile} className={styles.profile_link}>
                <img src={headerProfile} alt="Profile" />
            </Link>
        </nav>
    </header>
}