import { useState } from 'react';
import { TrackJS } from 'trackjs';
import { useToken } from './useToken';
import { useAppDispatch, useAppSelector, API_URL } from '@shared';
import { acceptInv, removeInv } from './authSlice';
import { selectUserInvs } from './selectUser';

export const useInvitations = () => {
  const dispatch = useAppDispatch();
  const { header } = useToken();
  const invitations = useAppSelector(selectUserInvs);
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);

  const handleAcceptInvitation = async (id: number) => {
    setAcceptLoading(true);

    try {
      const response = await fetch(`${API_URL}act/accept_inv/${id}`, {
        method: 'POST',
        headers: header,
      });

      if (response.ok) {
        const json = await response.json();
        setAcceptLoading(false);
        dispatch(
          acceptInv({
            id: id,
            org: {
              id: json.id,
              name: json.name,
              owned: json.owned,
            },
          })
        );
      }
    } catch (error) {
      setAcceptLoading(false);
      const e = error as Error;
      TrackJS.track(e);
    }
  };

  const handleRejectInvitation = async (id: number) => {
    setRejectLoading(true);

    try {
      const response = await fetch(`${API_URL}act/reject_inv/${id}`, {
        method: 'POST',
        headers: header,
      });
      setRejectLoading(false);

      if (response.ok) {
        dispatch(removeInv(id));
      }
    } catch (error) {
      const e = error as Error;
      TrackJS.track(e);
    }
  };

  return {
    invitations,
    handleAcceptInvitation,
    handleRejectInvitation,
    acceptLoading,
    rejectLoading,
  };
};
