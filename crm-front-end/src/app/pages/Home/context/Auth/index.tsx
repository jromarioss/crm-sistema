import { createContext } from "react";
import * as IAuth from "./model";

export const AuthContext = createContext({} as IAuth.IAuthContext);

export const AuthContextProvider = ({ children }: IAuth.IAuthContextProvider) => {
  return (
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}