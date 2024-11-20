import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  selectUserOrgs,
  fetchOrganization,
  selectOrganizationLoading,
} from '@features';
import { useAppDispatch, useAppSelector } from '@shared';

export const useOrganizationData = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const organizationID = Number(id);
  const organizations = useAppSelector(selectUserOrgs);
  const loading = useAppSelector(selectOrganizationLoading);
  const getOrganization = useCallback(
    () => dispatch(fetchOrganization(organizationID)),
    [dispatch, organizationID]
  );

  return {
    doesExist:
      typeof organizationID === 'number' && organizations[organizationID],
    getOrganization,
    loading: loading,
    organizationID,
  };
};
