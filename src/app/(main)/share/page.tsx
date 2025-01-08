"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import styles from "./style.module.css";
import { BACKEND_URL } from "@/config/config";
import { usePathname } from "next/navigation";

const SharePage = () => {
  const path = usePathname();

  const handleSubmit = async () => {
    try{
      const response = await axiosInstance.get(`${BACKEND_URL}/travel/join${path}`);
    } catch(e) {
      console.log(e);
    }
  }

  return(
    <div className={styles.container}>
      <input className={styles.input} placeholder="Paste Link Here" />
      <button onClick={handleSubmit} className={styles.button}>확인</button>
    </div>
  )
}

export default SharePage;