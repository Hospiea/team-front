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
  const { login, setLogin, userId, setUserId } = useContext(Context);

  const handleKakaoLogin = async () => {
    try {
      router.push(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleJoinTravel = () => {
    if(!login) {
      alert("로그인이 필요합니다.");
      return;
    }
    router.push("/share");
  }

  const handleCreateTravel = async () => {
    try {
      if(userId === -1) {
        localStorage.getItem("user_id");
        setUserId(Number(localStorage.getItem("user_id")));
      }
      const response = await axiosInstance.post(`${BACKEND_URL}/travel`, {
        id: userId,
      });
      console.log(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  const handleShowTravel = () => {
    if(!login) {
      alert("로그인이 필요합니다.");
      return;
    }
    router.push("/travel")
  }

  useEffect(() => {
    if(localStorage.getItem("user_id") && localStorage.getItem("access_token")) {
      setLogin(true);
    }

  }, []);
  

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img className="cursor-pointer" onClick={handleShowTravel} src="/images/main.png" alt="No Source" />
        <div className="flex justify-center mt-4">
          
          <div className="flex flex-col gap-8 mt-8">
            {!login && (
            <button onClick={handleKakaoLogin}>
              <img src="/images/kakao.png" alt="No Source" />
            </button>
          )}
          <button onClick={handleCreateTravel}>
            여행 만들기
          </button>
          <button onClick={handleJoinTravel}>
            여행 참여하기
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
