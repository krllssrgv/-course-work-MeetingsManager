import { selectOrganizationMembers, selectUserData } from '@features';
import { useAppSelector } from '@shared';

export const useMembers = () => {
  const members = useAppSelector(selectOrganizationMembers);
  const { id } = useAppSelector(selectUserData);
  // const
  const sortedMembers = [...Object.values(members)].sort();

  return sortedMembers.filter((member) => member.id !== id);
};
