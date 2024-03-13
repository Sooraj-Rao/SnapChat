"use client";
import { AuthForm, AuthFormFooter } from "../layout";
import { Validate } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";

export default function LoginCard() {
  const getInput = (input: object) => {
    const isValid = Validate(input);
    if (isValid) {
      return alert(isValid);
    } else {
      useLogin(input);
    }
  };
  return (
    <>
      <AuthForm getInput={getInput} />
    </>
  );
}
