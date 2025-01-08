"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import styles from "./style.module.css";
import { BACKEND_URL } from "@/config/config";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SharePage = () => {
  const path = usePathname();
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    try{
      const urlSegment = value.split('/').pop();
      const response = await axiosInstance.get(`${BACKEND_URL}/travel/share/join/${urlSegment}`);
      console.log(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  return(
    <div className={styles.container}>
      <input value={value} onChange={(e) => setValue(e.target.value)} className={styles.input} placeholder="Paste Link Here" />
      <button onClick={handleSubmit} className={styles.button}>확인</button>
    </div>
  )
}

export default SharePage;