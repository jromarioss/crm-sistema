import type { Dispatch, SetStateAction } from "react";

export interface IAuthContextProvider {
  children: React.ReactNode;
}

export interface IAuthContext {
  email: string;
  password: string;
  isPassword: boolean;
  forgotPassword: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setIsPassword: Dispatch<SetStateAction<boolean>>;
  setForgotPassword: Dispatch<SetStateAction<boolean>>;
}