import type { Dispatch, SetStateAction } from 'react';
import styles from './RegAsOrg.module.scss';

type Props = {
    asOrg: boolean;
    setAsOrg: Dispatch<SetStateAction<boolean>>;
};

export const RegAsOrg = ({ asOrg, setAsOrg }: Props) => {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                className={styles.box}
                checked={asOrg}
                onChange={(e) => {
                    setAsOrg(e.target.checked);
                }}
            />
            <div className={styles.text}>
                Зарегистрироваться как организация
            </div>
        </div>
    );
};
