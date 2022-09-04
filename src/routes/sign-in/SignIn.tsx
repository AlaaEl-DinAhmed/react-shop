import FormInput from "@/components/input/Input";
import React from "react";

const SignIn = () => {
  const displayNameRef = React.createRef<HTMLInputElement>();
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const confirmPasswordRef = React.createRef<HTMLInputElement>();

  const signUp = (e: any) => {
    e.preventDefault();
    const user = {
      displayName: displayNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    };
  };
  return (
    <form onSubmit={(e) => signUp(e)}>
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
  );
};

export default SignIn;
