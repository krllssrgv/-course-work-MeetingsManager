import { useState } from "react";
import { useAppDispatch, useAppSelector, API_URL } from "@shared";
import { acceptInv, removeInv } from '../slices/authSlice';
import { selectUserInvs } from '../selectors/selectUser';


export const useInvitations = () => {
    const dispatch = useAppDispatch();
    const invitations = useAppSelector(selectUserInvs);
    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectLoading, setRejectLoading] = useState(false);


    const handleAcceptInvitation = async (id: number) => {
        setAcceptLoading(true);

        try {
            const response = await fetch(`${API_URL}act/accept_inv/${id}`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                const json = await response.json();
                setAcceptLoading(false);
                dispatch(acceptInv({
                    id: id,
                    org: {
                        id: json.id,
                        name: json.name,
                        owned: json.owned
                    }
                }));
            }
        } catch {
            setAcceptLoading(false);
        }
    };


    const handleRejectInvitation = async (id: number) => {
        setRejectLoading(true);

        try {
            const response = await fetch(`${API_URL}act/reject_inv/${id}`, {
                method: 'POST',
                credentials: 'include',
            });
            setRejectLoading(false);

            if (response.ok) {
                dispatch(removeInv(id));
            }
        } catch {
            // Обработка ошибки
        }
    };


    return {
        invitations,
        handleAcceptInvitation,
        handleRejectInvitation,
        acceptLoading,
        rejectLoading
    }
}