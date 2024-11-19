import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createMeeting } from '@features';
import { API_URL, APP_ROUTES, checkSpace, useAppDispatch } from '@shared';

export const useCreate = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const orgID = id === undefined ? id : Number(id);

    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const [loading, setLoading] = useState(false);
    const [blockedButton, setBlockedButton] = useState(true);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (
            checkSpace(title) &&
            checkSpace(place) &&
            checkSpace(description) &&
            checkSpace(time) &&
            checkSpace(date)
        ) {
            setBlockedButton(false);
        } else {
            setBlockedButton(true);
        }
    }, [date, description, place, time, title]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (comment) {
            timer = setTimeout(() => {
                setComment('');
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [comment]);

    const state = {
        blockedButton,
        loading,
        comment,
        title,
        place,
        description,
        time,
        date,
    };

    const stateSetters = {
        setTitle,
        setPlace,
        setDescription,
        setTime,
        setDate,
    };

    const handleCreate = async () => {
        setLoading(true);
        setComment('');
        try {
            const response = await fetch(`${API_URL}act/create_meeting`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    organization_id: orgID,
                    title: title,
                    place: place,
                    description: description,
                    time: time,
                    date: date,
                }),
            });

            setLoading(false);
            if (response.ok) {
                const json = await response.json();
                dispatch(createMeeting(json));
                navigate(APP_ROUTES.organization(orgID));
            }
        } catch {
            setLoading(false);
            setComment('Ошибка!');
        }
    };

    return {
        state,
        stateSetters,
        handleCreate,
    };
};