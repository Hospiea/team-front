"use client";
import { ContextType, defaultContextType } from "@/types/context";
import { createContext, useState } from "react";

export const Context = createContext<ContextType>(defaultContextType);



const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [userId, setUserId] = useState<number>(-1);

  return (
    <Context.Provider value={{ userId, setUserId, login, setLogin, accessToken, setAccessToken }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider;