import { useEffect } from 'react';
import { InvitationsMaker, Members } from '@widgets';
import styles from './MembersPage.module.scss';

export const MembersPage = () => {
  useEffect(() => {
    document.title = 'Участники';
  }, []);

  return (
    <div className={styles.container}>
      <InvitationsMaker />
      <Members />
    </div>
  );
};
