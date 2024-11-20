import type { Dispatch, SetStateAction } from 'react';
import styles from './TextInput.module.scss';

type Props = {
  type: string;
  name: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const TextInput = ({ type, name, label, value, setValue }: Props) => {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="input"
      />
      <label data-testid="label" htmlFor={name} className={styles.placeholder}>
        {label}
      </label>
    </div>
  );
};
