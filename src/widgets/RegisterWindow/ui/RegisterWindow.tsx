import { LongButton, TextInput, InputsContainer, AuthError } from '@shared';
import { useRegister } from '../model/useRegister';

export const RegisterWindow = () => {
  const {
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
  } = useRegister();

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
        <TextInput
          type="password"
          name="repeated-password"
          label="Пароль повторно"
          value={repeatedPassword}
          setValue={setRepeatedPassword}
        />
        <TextInput
          type="text"
          name="name"
          label="Имя"
          value={name}
          setValue={setName}
        />
        <TextInput
          type="text"
          name="lastname"
          label="Фамилия"
          value={lastname}
          setValue={setLastname}
        />
        <TextInput
          type="text"
          name="fathername"
          label="Отчество"
          value={fathername}
          setValue={setFathername}
        />
      </InputsContainer>
      <AuthError error={error} />
      <LongButton
        onClick={registerHandle}
        text="Зарегистрироваться"
        loading={loading}
        blocked={blocked}
      />
    </>
  );
};
