import cn from 'classnames';
import loadingIcon from '../../../assets/loading.png';
import styles from './LongButton.module.scss';

type Props = {
  text: string;
  onClick: () => void;
  loading: boolean;
  blocked: boolean;
};

export const LongButton = ({ onClick, text, loading, blocked }: Props) => {
  return (
    <button
      className={cn(styles.button, blocked ? styles.blocked : null)}
      onClick={!blocked && !loading ? onClick : () => {}}
    >
      {loading ? (
        <img src={loadingIcon} alt="Загрузка..." className={styles.image} />
      ) : (
        text
      )}
    </button>
  );
};
