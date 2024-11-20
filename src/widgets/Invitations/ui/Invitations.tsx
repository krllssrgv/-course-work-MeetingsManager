import { useInvitations } from '@features';
import { InvitationElement } from '@entities';
import styles from './Invitations.module.scss';

export const Invitations = () => {
  const { invitations } = useInvitations();
  const invsElements = Object.values(invitations).map((inv) => (
    <InvitationElement key={inv.id} id={inv.id} name={inv.organization} />
  ));

  if (invsElements.length) {
    return <div className={styles.invs_list}>{invsElements}</div>;
  } else {
    return <></>;
  }
};
