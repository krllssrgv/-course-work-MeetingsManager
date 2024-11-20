import { selectUserAuth } from "./selectUser";
import { useAppSelector } from "@shared";


export const useToken = () => {
    const token = useAppSelector(selectUserAuth).token;
    return {
        token,
        header: {
            'Authorization': `Bearer ${token}`
        }
    }
}