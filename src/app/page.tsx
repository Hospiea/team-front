"use client";
import { BACKEND_URL, KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from "@/config/config";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/utils/context";
import axios from "axios";
import { axiosInstance } from "@/utils/axiosInstance";

export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState(true);
  const context = useContext(Context);

  const handleKakaoLogin = async () => {
    try {
      router.push(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  const testFunc = async () => {
    try {
      if(context.userId === -1) {
        localStorage.getItem("user_id");
        context.setUserId(Number(localStorage.getItem("user_id")));
      }
      const response = await axiosInstance.post(`${BACKEND_URL}/travel`, {
        id: context.userId,
      });

    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);
      context.setLogin(true);
    } else {
      setLogin(false);
      context.setLogin(false);
    }
    testFunc();

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img src="/images/main.png" alt="No Source" />
        <div className="flex justify-center mt-4">
          {!login ? (
            <button onClick={handleKakaoLogin}>
              <img src="/images/kakao.png" alt="No Source" />
            </button>
          ) : (<div></div>)}
        </div>
      </div>
    </div>
  );
}
