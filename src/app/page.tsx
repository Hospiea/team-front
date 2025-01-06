"use client";
import { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from "@/config/config";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState(true);

  const handleKakaoLogin = async () => {
    try {
      router.push(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
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
