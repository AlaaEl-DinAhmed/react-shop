import { FormInput } from "@/components/input/Input";
import {
  createAuthWithEmailAndPassword,
  createUserDocFromAuth,
} from "@/utils/firebase";
import React from "react";

export const SignUp = () => {
  const displayNameRef = React.createRef<HTMLInputElement>();
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const confirmPasswordRef = React.createRef<HTMLInputElement>();

  const signUp = async (e: any) => {
    e.preventDefault();
    const userInfo = {
      displayName: displayNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    };

    try {
      const user = await createAuthWithEmailAndPassword(
        userInfo.email,
        userInfo.password
      );
      await createUserDocFromAuth(user, {
        displayName: displayNameRef.current?.value,
      });
    } catch (error) {}
  };
  return (
    <>
      <h2>I do not have a account</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={signUp}>
        <FormInput
          id={"displayName"}
          label={"Display Name"}
          type={"text"}
          ref={displayNameRef}
        />
        <FormInput id={"email"} label={"Email"} type={"email"} ref={emailRef} />
        <FormInput
          id={"password"}
          label={"Password"}
          type={"password"}
          ref={passwordRef}
        />
        <FormInput
          id={"confirmPassword"}
          label={"Confirm Password"}
          type={"password"}
          ref={confirmPasswordRef}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
