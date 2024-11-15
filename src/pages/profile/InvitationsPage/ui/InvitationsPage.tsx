import { useEffect } from 'react';
import { Invitations } from '@widgets';
import { selectUserInvs } from '@entities';
import { useAppSelector } from '@shared';
import styles from './InvitationPage.module.scss';

export const InvitationsPage = () => {
    const invs = useAppSelector(selectUserInvs);

    useEffect(() => {
        document.title = 'Приглашения';
    }, []);

    const invsQuantity = Object.keys(invs).length;
    const invsQuantityText =
        invsQuantity > 0
            ? `Активных приглашений: ${invsQuantity}`
            : 'Сейчас у вас нет активных приглашений';

    return (
        <>
            <p className={styles.title}>
                На данной странице находятся приглашения в другие организации
            </p>
            <p className={styles.title}>{invsQuantityText}</p>
            <Invitations />
        </>
    );
};
