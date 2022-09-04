import { Ref } from "react";

export interface IInput {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  ref: Ref<HTMLInputElement>;
}
