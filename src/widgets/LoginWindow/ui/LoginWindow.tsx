import { LongButton, TextInput, InputsContainer, AuthError } from '@shared';
import { useLogin } from '../model/useLogin';

export const LoginWindow = () => {
  const {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    blocked,
  } = useLogin();

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
      <LongButton
        onClick={handleLogin}
        text="Войти"
        loading={loading}
        blocked={blocked}
      />
    </>
  );
};
