import { BACKEND_URL, KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from "@/config/config";
import { LoginRequest } from "@/types/dto";
import { Context } from "@/utils/context";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

const KakaoAuthContentPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { setLogin, setUserId, setAccessToken } = useContext(Context);

  const handleLogin = async (code: string) => {
    try {
      const response = await axios.post(
        `https://kauth.kakao.com/oauth/token`,
        {
          grant_type: "authorization_code",
          client_id: `${KAKAO_REST_API_KEY}`,
          redirect_uri: `${KAKAO_REDIRECT_URI}`,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      if (response.data) {
        const loginRequest: LoginRequest = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
        const result = await axios.post(`${BACKEND_URL}/user`, loginRequest);
        if(result) {
          console.log(result.data);
          localStorage.setItem("access_token", result.data.access_token);
          localStorage.setItem("user_id", result.data.id);
          setUserId(result.data.id);
          setAccessToken(result.data.access_token);
          setLogin(true);
          router.push("/");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (params) {
      handleLogin(params.get("code") as string);
    }
  }, [params]);
  return(
    <div>
      
    </div>
  )
}

export default KakaoAuthContentPage;