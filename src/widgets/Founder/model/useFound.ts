import { useState, useEffect } from 'react';
import { foundOrganization } from '@features';
import { API_URL, useAppDispatch } from '@shared';

export const useFound = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    const [loading, setLoading] = useState(false);
    const [blocked, setBlocked] = useState(true);
    const [comment, setComment] = useState('');

    useEffect(() => {
        setBlocked(!name);
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
        try {
            const response = await fetch(`${API_URL}act/create_org`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                }),
            });

            if (response.ok) {
                const json = await response.json();
                setLoading(false);
                dispatch(
                    foundOrganization({
                        id: json.id,
                        name: json.name,
                        owned: true,
                    })
                );
                setComment('Успешно');
            } else {
                setLoading(false);
                setComment('Ошибка');
            }
        } catch {
            setLoading(false);
            setComment('Ошибка');
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
