"use client";
import { ContextType, defaultContextType } from "@/types/context";
import { createContext, useState } from "react";

export const Context = createContext<ContextType>(defaultContextType);



const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  

  return (
    <Context.Provider value={{ login, setLogin, accessToken, setAccessToken }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider;