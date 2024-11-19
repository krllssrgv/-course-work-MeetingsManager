import orangeLoadingImg from '../../../assets/orange_loading.png';
import styles from './Waiting.module.scss';

export const Waiting = () => {
    return (
        <div className={styles.waiting}>
            <div className={styles.waiting_text}>Загрузка данных</div>
            <img
                className={styles.waiting_image}
                src={orangeLoadingImg}
                alt="waiting spinner"
            />
        </div>
    );
};
