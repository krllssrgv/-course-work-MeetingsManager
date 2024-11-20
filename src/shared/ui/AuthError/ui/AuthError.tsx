import styles from './AuthError.module.scss';

type Props = {
  error: string;
};

export const AuthError = ({ error }: Props) => {
  return (
    <div data-testid="error-div" className={styles.error}>
      {error}
    </div>
  );
};
