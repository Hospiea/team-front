"use client";
import { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } from "@/config/config";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function Home() {
  const router = useRouter();

  const handleKakaoLogin = async () => {
    try{
      router.push(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`);
      
    } catch(e) {
      console.log(e);
    }
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img src="/images/main.png" alt="No Source" />
        <div className="flex justify-center mt-4">
          <button onClick={handleKakaoLogin}>
            <img src="/images/kakao.png" alt="No Source" />
          </button>
        </div>
      </div>
    </div>
  );
}
