import React, { createContext } from "react";

export const MainContext = createContext({} as any);

interface IMainContextProvider {
  children: React.ReactNode;
}

export function MainContextProvider({ children }: IMainContextProvider) {

  return (
    <MainContext.Provider value={{

    }}>
      {children}
    </MainContext.Provider>
  )
}