import { selectUserOrgs } from './selectUser';
import { useAppSelector } from '@shared';

export const useOwner = () => {
  const organizations = useAppSelector(selectUserOrgs);
  return (id: number) => {
    if (id && organizations[id]) {
      return organizations[id].owned;
    } else {
      return false;
    }
  };
};
