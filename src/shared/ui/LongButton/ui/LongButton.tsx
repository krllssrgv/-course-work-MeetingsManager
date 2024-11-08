import loadingIcon from '../../../img/loading.png';
import styles from './LongButton.module.scss';

type Props = {
    text: string;
    func: () => void;
    loading: boolean;
};

export const LongButton = ({ func, text, loading }: Props) => {
    return (
        <button className={styles.button} onClick={loading ? () => {} : func}>
            {loading ? (
                <img
                    src={loadingIcon}
                    alt="Загрузка..."
                    className={styles.image}
                />
            ) : (
                text
            )}
        </button>
    );
};
