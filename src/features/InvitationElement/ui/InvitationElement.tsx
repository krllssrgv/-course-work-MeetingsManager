import { useInvitations } from '@entities';
import { AppButton } from '@shared';
import styles from './InvitationElement.module.scss';

type Props = {
    id: number;
    name: string;
};

export const InvitationElement = ({ id, name }: Props) => {
    const { acceptLoading, rejectLoading, handleAcceptInvitation, handleRejectInvitation } = useInvitations();
    

    return (
        <div className={styles.inv}>
            <div className={styles.name}>{name}</div>
            <AppButton
                text="Принять"
                onClick={() => handleAcceptInvitation(id)}
                loading={acceptLoading}
                block={rejectLoading}
            />
            <AppButton
                text="Отклонить"
                negative={true}
                onClick={() => handleRejectInvitation(id)}
                loading={rejectLoading}
                block={acceptLoading}
            />
        </div>
    );
};
