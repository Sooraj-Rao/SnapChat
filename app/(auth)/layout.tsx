"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen bg-slate-500">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="p-8 bg-white rounded-lg shadow-md min-w-80">
          <Link href={"/"} className="flex justify-center mb-4">
            <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

export const AuthFormFooter = ({ isLoginRoute }: string) => {
  return (
    <div className="mt-4 text-center text-[13px]">
      <span>{isLoginRoute ? "Dont " : "Already "}have an account? </span>
      <Link
        className="text-blue-500 hover:underline text-[13px] mr-1"
        href={isLoginRoute ? "/signup" : "/login"}
      >
        {isLoginRoute ? "SignUp " : "Login"}
      </Link>
    </div>
  );
};

export const AuthForm = ({ getInput }) => {
  const pathname = usePathname();
  const isLoginRoute = pathname.endsWith("/login");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Inputs = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };
    getInput(Inputs);
  };

  return (
    <section className="bg-gray-1 py-20  lg:py-0">
      <div className="mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto w-[20rem] overflow-hidden rounded-lg bg-white text-center ">
              <form onSubmit={handleSubmit} className=" mt-1 p-1">
                <input
                  ref={emailRef}
                  type="text"
                  placeholder="Email"
                  name="email"
                  className=" w-full mb-3 rounded-md border-2 border-gray-300 focus:ring-2 ring-blue-300 outline-none  bg-transparent px-4 py-2  "
                />
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full mb-3 rounded-md border-2 border-gray-300 focus:ring-2 ring-blue-300 outline-none  bg-transparent px-4 py-2  "
                />
                <button className="  bg-sigButton font-medium hover:bg-sigButtonHover  py-2 w-full text-base rounded text-white">
                  {!isLoginRoute ? "Sign In" : "Login"}
                </button>
                <h4 className=" text-xs my-3">OR</h4>
              </form>
              <LoginButton isLoginRoute={isLoginRoute} />
              <AuthFormFooter isLoginRoute={isLoginRoute} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function LoginButton({ isLoginRoute }) {
  return (
    <Button className="w-full flex gap-2">
      <Image src={"/github.svg"} width={20} height={20} alt="Github logo" />
      {isLoginRoute ? "Log" : "Sign "}
      in with Github
    </Button>
  );
}
