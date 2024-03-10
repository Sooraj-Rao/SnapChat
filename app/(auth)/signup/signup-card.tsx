"use client";
import React from "react";
import { AuthForm, AuthFormFooter } from "../layout";
import { useSignUp } from "../hooks/useSignup";
import { object } from "zod";

const Signin = () => {
  const getInput = (input:object) => {
    useSignUp(input);
  };
  return (
    <>
      <AuthForm getInput={getInput} />
    </>
  );
};

export default Signin;
