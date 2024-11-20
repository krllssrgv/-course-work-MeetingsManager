import { AppButton } from '@shared';
import styles from './Member.module.scss';

type Props = {
  id: number;
  fullName: string;
  email: string;
  handleRemove: (id: number) => void;
};

export const Member = ({ id, fullName, email, handleRemove }: Props) => {
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
