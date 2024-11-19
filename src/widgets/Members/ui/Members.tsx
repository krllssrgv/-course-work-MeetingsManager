import { Member } from '@entities';
import { useMembers } from '../model/useMembers';
import styles from './Members.module.scss';

export const Members = () => {
    const sortedMembers = useMembers();
    const renderedMembers = sortedMembers.map((member) => (
        <Member
            key={member.id}
            id={member.id}
            fullName={member.fullName}
            email={member.email}
        />
    ));

    return (
        <div className={styles.container}>
            {renderedMembers.length ? (
                <>
                    <div className={styles.title}>Участники</div>
                    <div className={styles.content}>{renderedMembers}</div>
                </>
            ) : (
                <div className={styles.title}>Участников пока нет</div>
            )}
        </div>
    );
};
