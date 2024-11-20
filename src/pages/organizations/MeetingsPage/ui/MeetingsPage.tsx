import { useEffect } from 'react';
import { MeetingsList } from '@widgets';

export const MeetingsPage = () => {
  useEffect(() => {
    document.title = 'Встречи';
  }, []);

  return <MeetingsList />;
};
