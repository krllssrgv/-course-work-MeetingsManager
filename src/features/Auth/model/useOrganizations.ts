import { selectUserOrgs } from './selectUser';
import { useAppSelector } from '@shared';

export const useOrganizations = () => {
  const organizations = useAppSelector(selectUserOrgs);

  return {
    organizations,
  };
};
