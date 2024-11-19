import { TextInput, AppButton } from '@shared';
import { useFound } from '../model/useFound';
import styles from './Founder.module.scss';

export const Founder = () => {
    const { name, setName, loading, blocked, comment, handleFound } =
        useFound();

    return (
        <div className={styles.container}>
            <TextInput
                type="text"
                name="name"
                label="Наименование"
                value={name}
                setValue={setName}
            />

            <div className={styles.btn}>
                <AppButton
                    onClick={handleFound}
                    text="Создать"
                    loading={loading}
                    block={blocked}
                />
                <div className={styles.comment}>{comment}</div>
            </div>
        </div>
    );
};
