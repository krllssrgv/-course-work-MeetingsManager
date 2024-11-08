import type { ReactNode } from 'react';
import styles from './InputsContainer.module.scss';

type Props = {
    children: ReactNode;
};

export const InputsContainer = ({ children }: Props) => {
    return <div className={styles.inputs_container}>{children}</div>;
};
