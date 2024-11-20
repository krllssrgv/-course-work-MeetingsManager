import { useEffect } from 'react';
import { Founder } from '@widgets';

export const CreateOrganizationPage = () => {
  useEffect(() => {
    document.title = 'Создание организации';
  }, []);

  return <Founder />;
};
