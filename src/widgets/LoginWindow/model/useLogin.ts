import { useState, useEffect } from 'react';
import { fetchUser } from '@features';
import { useAppDispatch, API_URL, checkSpace } from '@shared';

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

        try {
            const response = await fetch(`${API_URL}auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                dispatch(fetchUser());
                setLoading(false);
            } else {
                setLoading(false);
                const json = await response.json();
                setError(json.error);
            }
        } catch {
            setError('Ошибка подключения');
            setLoading(false);
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
