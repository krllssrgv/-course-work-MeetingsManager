import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TrackJS } from 'trackjs';
import { useToken } from '@features';
import { checkSpace, API_URL, metrics } from '@shared';

export const useInvite = () => {
  const { header } = useToken();
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    setBlocked(!checkSpace(email));
  }, [email]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (success) {
      timer = setTimeout(() => {
        setSuccess('');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleInvite = async () => {
    setError('');
    setLoading(true);
    setSuccess('');
    metrics.metricInvitations();

    try {
      const response = await fetch(`${API_URL}act/create_inv`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...header
        },
        body: JSON.stringify({
          to_user: email,
          to_org: id,
        }),
      });

      if (response.ok) {
        setLoading(false);
        setEmail('');
        setSuccess('Успешно');
      } else {
        const json = await response.json();
        setLoading(false);
        setError(json.error);
      }
    } catch (error) {
      setError('Ошибка подключения');
      setLoading(false);
      const e = error as Error;
      TrackJS.track(e);
    }
  };

  return {
    email,
    setEmail,
    loading,
    blocked,
    handleInvite,
    error,
    success,
  };
};
