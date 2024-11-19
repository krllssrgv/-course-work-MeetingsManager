import { AppButton } from '@shared';
import { useRemoveMember } from '../model/useRemoveMember';
import styles from './Member.module.scss';

type Props = {
    id: number;
    fullName: string;
    email: string;
};

export const Member = ({ id, fullName, email }: Props) => {
    const { handleRemove } = useRemoveMember();
    console.log({ id, fullName, email });

    return (
        <div className={styles.member}>
            <div className={styles.data}>
                <div className={styles.name}>{fullName}</div>
                <div className={styles.email}>{email}</div>
            </div>
            <div className={styles.btn}>
                <AppButton
                    onClick={() => handleRemove(id)}
                    text="Удалить"
                    loading={false}
                    negative
                />
            </div>
        </div>
    );
};
