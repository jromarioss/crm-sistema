import { createContext, useState } from "react";
import * as IAuth from "./model";
import { ForgotPasswordModal } from "../../components";

export const AuthContext = createContext({} as IAuth.IAuthContext);

export const AuthContextProvider = ({ children }: IAuth.IAuthContextProvider) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{
      email, password, isPassword, setEmail, setPassword, setIsPassword, forgotPassword, setForgotPassword
    }}>
      {forgotPassword && <ForgotPasswordModal show={forgotPassword} close={setForgotPassword} />}
      {children}
    </AuthContext.Provider>
  )
}