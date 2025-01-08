"use client";
import { Context } from "@/utils/context";
import { useContext, useEffect, useState } from "react";


const useAuth = () => {
  const { login, setLogin, setUserId, accessToken, setAccessToken } = useContext(Context);
  const [loading, setLoading] = useState(true);
  
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
      setLogin(true);
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

    setLoading(false);
  }, [loading]);
}

export default useAuth;