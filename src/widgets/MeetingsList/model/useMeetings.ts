import { selectOrganizationMeetings, selectOrganizationData } from '@features';
import { useAppSelector } from '@shared';

export const useMeetings = () => {
  const meetings = useAppSelector(selectOrganizationMeetings);
  const { name } = useAppSelector(selectOrganizationData);

  const sortedMeetings = [...Object.values(meetings)].sort((a, b) => {
    const aDate = new Date(`${a.date}T${a.time}`);
    const bDate = new Date(`${b.date}T${b.time}`);
    return aDate.getTime() - bDate.getTime();
  });

  return {
    meetings: sortedMeetings,
    name,
  };
};
