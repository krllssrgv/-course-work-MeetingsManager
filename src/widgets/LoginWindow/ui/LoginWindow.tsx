import { useState } from 'react';
import { fetchUser } from '@features';
import {
    LongButton,
    TextInput,
    API_URL,
    useAppDispatch,
    InputsContainer,
    AuthError,
} from '@shared';

export const LoginWindow = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const loginHandle = () => {
        setError('');
        setLoading(true);

        const fetchLogin = async () => {
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

        fetchLogin();
    };

    return (
        <>
            <InputsContainer>
                <TextInput
                    type="text"
                    name="email"
                    label="Email"
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    type="password"
                    name="password"
                    label="Пароль"
                    value={password}
                    setValue={setPassword}
                />
            </InputsContainer>
            <AuthError error={error} />
            <LongButton onClick={loginHandle} text="Войти" loading={loading} />
        </>
    );
};
