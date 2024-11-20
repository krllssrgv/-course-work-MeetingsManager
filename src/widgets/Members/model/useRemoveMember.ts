import { useParams } from 'react-router-dom';
import { TrackJS } from 'trackjs';
import { removeMember, removeMeetings } from '@features';
import { useAppDispatch, API_URL } from '@shared';

export const useRemoveMember = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const organizationID = Number(id);


  const handleRemove = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}act/remove_member`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          organization_id: organizationID,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        dispatch(removeMember(id));
        dispatch(removeMeetings(json.orgs_to_remove));
      }
    } catch (error) {
      const e = error as Error;
      TrackJS.track(e);
    }
  };

  return handleRemove;
};
