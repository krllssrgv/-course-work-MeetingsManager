import styles from './Meeting.module.scss';

type Props = {
    id: number;
    title: string;
    place: string;
    description: string;
    time: string;
    date: string;
};

export const Meeting = ({ title, place, description, time, date }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.place}>Место проведения: {place}</div>
            <div className={styles.datetime}>
                Дата проведения: {date} в {time}
            </div>
            <div className={styles.description}>
                <pre>{description}</pre>
            </div>
        </div>
    );
};
