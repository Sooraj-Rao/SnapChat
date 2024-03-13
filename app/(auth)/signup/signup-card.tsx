"use client";
import { AuthForm, AuthFormFooter } from "../layout";
import { Validate, useSignUp } from "../hooks/useSignup";

const Signin = () => {
  const getInput = (input: object) => {
    const isValid = Validate(input);
    if (isValid) {
      return alert(isValid);
    } else {
      useSignUp(input);
    }
  };
  return (
    <>
      <AuthForm getInput={getInput} />
    </>
  );
};

export default Signin;
