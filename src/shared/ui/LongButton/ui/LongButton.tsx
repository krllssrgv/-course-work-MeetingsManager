import cn from 'classnames';
import loadingIcon from '../../../assets/loading.png';
import styles from './LongButton.module.scss';

type Props = {
    text: string;
    onClick: () => void;
    loading: boolean;
};

export const LongButton = ({ onClick, text, loading }: Props) => {
    return (
        <button
            className={cn(styles.button)}
            onClick={loading ? () => {} : onClick}
        >
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
