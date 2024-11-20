import { useState, useEffect } from 'react';
import { TrackJS } from 'trackjs';
import Cookies from 'js-cookie';
import { setToken } from '@features';
import { useAppDispatch, API_URL, checkSpace, metrics } from '@shared';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      checkSpace(email) &&
      emailReg.test(email) &&
      checkSpace(password) &&
      password.length > 5
    ) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }, [email, password]);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    metrics.metrciLogin();

    try {
      const response = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        setLoading(false);
        Cookies.set('access_token', json.access_token);
        dispatch(setToken(json.access_token));
      } else {
        setLoading(false);
        const json = await response.json();
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
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    blocked,
  };
};
