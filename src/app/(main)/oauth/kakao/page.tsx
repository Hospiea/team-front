"use client";
import { BACKEND_URL, KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from "@/config/config";
import { LoginRequest } from "@/types/dto";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KakaoLoginPage = () => {
  const params = useSearchParams();
  
  const handleLogin = async (code: string) => {
    try{
      const response = await axios.post(`https://kauth.kakao.com/oauth/token`, {
        grant_type: "authorization_code",
        client_id: `${KAKAO_REST_API_KEY}`,
        redirect_uri: `${KAKAO_REDIRECT_URI}`,
        code: code,
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
      });
      if(response.data) {
        const loginRequest: LoginRequest = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        }
        const result = await axios.post(`${BACKEND_URL}/user`, loginRequest);
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (params) {
      handleLogin(params.get("code") as string);
    }
  }, [params]);

  return (
    <div className="flex h-full items-center justify-center">
      <h1>로그인 중입니다...</h1>
    </div>
  );
};

export default KakaoLoginPage;