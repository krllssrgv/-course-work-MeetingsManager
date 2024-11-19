import { UserSelector } from '@features';
import { TextInput, AppButton } from '@shared';
import { useCreate } from '../model/useCreate';
import styles from './Creator.module.scss';

export const Creator = () => {
    const { state, stateSetters, handleCreate } = useCreate();
    const {
        loading,
        blockedButton,
        comment,
        title,
        place,
        description,
        time,
        date,
    } = state;
    const { setTitle, setPlace, setDescription, setTime, setDate } =
        stateSetters;

    return (
        <div className={styles.container}>
            <TextInput
                type="text"
                name="title"
                label="Название"
                value={title}
                setValue={setTitle}
            />
            <TextInput
                type="text"
                name="place"
                label="Место"
                value={place}
                setValue={setPlace}
            />
            <textarea
                name="description"
                className={styles.area}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={400}
            ></textarea>
            <input
                className={styles.datetime}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                className={styles.datetime}
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <UserSelector />
            <div className={styles.btn}>
                <AppButton
                    text="Создать"
                    onClick={handleCreate}
                    loading={loading}
                    block={blockedButton}
                />
                <div className={styles.comment}>{comment}</div>
            </div>
        </div>
    );
};
