import cn from 'classnames';
import loadingIcon from '../../../assets/loading.png';
import styles from './AppButton.module.scss';

type Props = {
    text: string;
    onClick: () => void;
    loading: boolean;
    negative?: boolean;
    block?: boolean;
};

export const AppButton = ({
    onClick,
    text,
    loading,
    negative,
    block,
}: Props) => {
    return (
        <button
            className={cn(styles.button, negative ? styles.negative : null)}
            onClick={!block && !loading ? onClick : () => {}}
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
