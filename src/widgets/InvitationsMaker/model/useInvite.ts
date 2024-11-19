import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { checkSpace, API_URL } from '@shared';

export const useInvite = () => {
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
        try {
            const response = await fetch(`${API_URL}act/create_inv`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
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
        } catch {
            setError('Ошибка подключения');
            setLoading(false);
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
