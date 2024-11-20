import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrackJS } from 'trackjs';
import { API_URL, APP_ROUTES, checkSpace, metrics } from '@shared';

export const useRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      checkSpace(email) &&
      emailReg.test(email) &&
      checkSpace(password) &&
      password.length > 5 &&
      password === repeatedPassword &&
      checkSpace(name) &&
      checkSpace(lastname) &&
      checkSpace(fathername)
    ) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }, [email, fathername, lastname, name, password, repeatedPassword]);

  const registerHandle = async () => {
    setError('');
    setLoading(true);
    metrics.metrciReg();

    try {
      const response = await fetch(`${API_URL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          repeated_password: repeatedPassword,
          name: name,
          lastname: lastname,
          fathername: fathername,
        }),
      });

      setLoading(false);
      if (response.ok) {
        navigate(APP_ROUTES.login);
      } else {
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
    registerHandle,
    email,
    setEmail,
    password,
    setPassword,
    repeatedPassword,
    setRepeatedPassword,
    name,
    setName,
    lastname,
    setLastname,
    fathername,
    setFathername,
    error,
    loading,
    blocked,
  };
};
