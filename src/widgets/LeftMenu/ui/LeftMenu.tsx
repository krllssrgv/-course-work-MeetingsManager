import { useLocation, useParams } from 'react-router-dom';
import { useOwner } from '@features';
import { APP_ROUTES, MenuLink } from '@shared';
import styles from './LeftMenu.module.scss';

export const LeftMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentFirstPath = location.pathname.split('/').slice(0, 2).join('/');
    const { id } = useParams();
    const pathID = Number(id);
    const checkOwner = useOwner();

    const setLinks = () => {
        switch (currentFirstPath) {
            case APP_ROUTES.main:
                return <></>;

            case APP_ROUTES.organizations:
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.organizations}
                            text="Организации"
                            active={currentPath === APP_ROUTES.organizations}
                        />
                        <MenuLink
                            to={APP_ROUTES.found}
                            text="Создать орагинзацию"
                            active={currentPath === APP_ROUTES.found}
                        />
                    </>
                );

            case APP_ROUTES.organization():
                return (
                    <>
                        <MenuLink
                            to={APP_ROUTES.organization(pathID)}
                            text="Встречи"
                            active={
                                currentPath === APP_ROUTES.organization(pathID)
                            }
                        />
                        <MenuLink
                            to={APP_ROUTES.create(pathID)}
                            text="Создать встречу"
                            active={currentPath === APP_ROUTES.create(pathID)}
                        />
                        {checkOwner(pathID) ? (
                            <MenuLink
                                to={APP_ROUTES.members(pathID)}
                                text="Участники"
                                active={
                                    currentPath === APP_ROUTES.members(pathID)
                                }
                            />
                        ) : (
                            <></>
                        )}
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

    if (currentFirstPath === APP_ROUTES.main) {
        return <></>;
    } else {
        return <aside className={styles.container}>{setLinks()}</aside>;
    }
};
