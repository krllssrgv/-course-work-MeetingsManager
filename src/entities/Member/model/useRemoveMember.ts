import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { removeMember, removeMeetings } from '@features';
import { useAppDispatch, API_URL } from '@shared';

export const useRemoveMember = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const organizationID = Number(id);

    const [loading, setLoading] = useState(false);

    const handleRemove = async (id: number) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}act/remove_member`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: id,
                    organization_id: organizationID,
                }),
            });

            if (response.ok) {
                const json = await response.json();
                setLoading(false);
                dispatch(removeMember(id));
                dispatch(removeMeetings(json.orgs_to_remove));
            } else {
                setLoading(false);
            }
        } catch {
            setLoading(false);
        }
    };

    return {
        handleRemove,
        loading,
    };
};
