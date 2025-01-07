"use client";
import { Context } from "@/utils/context";
import { useContext, useEffect } from "react";


const useAuth = () => {
    const { login, setLogin, setUserId, accessToken, setAccessToken } = useContext(Context);
  
  useEffect(() => {
    if(accessToken === "") {
      const token = localStorage.getItem("access_token");
      if(token) {
        setAccessToken(token);
      }
      const userId = localStorage.getItem("user_id");
      if(userId) {
        setUserId(Number(userId));
      }
    } else {
      const token = localStorage.getItem("access_token");
      if(token) {
        setAccessToken(token);
      };
      const userId = localStorage.getItem("user_id");
      if(userId) {
        setUserId(Number(userId));
      }
      setLogin(true);
    }
  }, []);
}

export default useAuth;