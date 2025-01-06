"use client";
import { ContextType, defaultContextType } from "@/types/context";
import { createContext, useContext, useState } from "react";

export const Context = createContext<ContextType>(defaultContextType);



const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <Context.Provider value={{ login, setLogin }}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider;