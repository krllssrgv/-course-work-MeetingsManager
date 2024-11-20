import { TextInput, AppButton } from '@shared';
import { useInvite } from '../model/useInvite';
import styles from './InvitationsMaker.module.scss';

export const InvitationsMaker = () => {
  const { email, setEmail, loading, blocked, handleInvite, error, success } =
    useInvite();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Пригласить участника</div>
      <TextInput
        type="text"
        name="email"
        label="email"
        value={email}
        setValue={setEmail}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
      {success ? <div className={styles.success}>{success}</div> : null}
      <AppButton
        text="Пригласить"
        onClick={handleInvite}
        loading={loading}
        block={blocked}
      />
    </div>
  );
};
