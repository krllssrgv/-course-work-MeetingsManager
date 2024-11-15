import { useLocation } from 'react-router-dom';
import { APP_ROUTES, MenuLink } from '@shared';
import styles from './LeftMenu.module.scss';

export const LeftMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentFirstPath = location.pathname.split('/').slice(0, 2).join('/');

    const setLinks = () => {
        switch (currentFirstPath) {
            case APP_ROUTES.main:
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.main}
                            text="Главная"
                            active={currentPath === APP_ROUTES.main}
                        />
                        <MenuLink
                            to={APP_ROUTES.organizations}
                            text="Организации"
                            active={currentPath === APP_ROUTES.organizations}
                        />
                    </>
                );

            case APP_ROUTES.control:
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.control}
                            text="Организация"
                            active={currentPath === APP_ROUTES.control}
                        />
                        <MenuLink
                            to={APP_ROUTES.members}
                            text="Участники"
                            active={currentPath === APP_ROUTES.members}
                        />
                        <MenuLink
                            to={APP_ROUTES.events}
                            text="Встречи"
                            active={currentPath === APP_ROUTES.events}
                        />
                    </>
                );

            case APP_ROUTES.meetings:
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.meetings}
                            text="Встречи"
                            active={currentPath === APP_ROUTES.meetings}
                        />
                        <MenuLink
                            to={APP_ROUTES.myOwn}
                            text="Мои встречи"
                            active={currentPath === APP_ROUTES.myOwn}
                        />
                    </>
                );

            case APP_ROUTES.profile:
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.profile}
                            text="Профиль"
                            active={currentPath === APP_ROUTES.profile}
                        />
                        <MenuLink
                            to={APP_ROUTES.invitations}
                            text="Приглашения"
                            active={currentPath === APP_ROUTES.invitations}
                        />
                    </>
                );
        }
    };

    return <aside className={styles.container}>{setLinks()}</aside>;
};
