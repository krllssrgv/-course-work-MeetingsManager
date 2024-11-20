import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrackJS } from 'trackjs';
import { foundOrganization, useToken } from '@features';
import {
  API_URL,
  useAppDispatch,
  APP_ROUTES,
  checkSpace,
  metrics,
} from '@shared';

export const useFound = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { header } = useToken();

  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (name && checkSpace(name)) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }, [name]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (comment) {
      timer = setTimeout(() => {
        setComment('');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [comment]);

  const handleFound = async () => {
    setLoading(true);
    setComment('');
    metrics.metrcicCreateOrg();

    try {
      const response = await fetch(`${API_URL}act/create_org`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...header
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        setLoading(false);
        setName('');
        dispatch(
          foundOrganization({
            id: json.id,
            name: json.name,
            owned: true,
          })
        );
        navigate(APP_ROUTES.organizations);
      } else {
        setLoading(false);
        setComment('Ошибка');
      }
    } catch (error) {
      setLoading(false);
      setComment('Ошибка');
      const e = error as Error;
      TrackJS.track(e);
    }
  };

  return {
    name,
    setName,
    loading,
    blocked,
    comment,
    handleFound,
  };
};
