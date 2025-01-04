"use client";
import axios from "axios";
import styles from "./style.module.css";
import { BACKEND_URL } from "@/config/config";
import { useState } from "react";

const AuthPage = () => {
  const [val, setVal] = useState("");

  const handleSubmit = async () => {
    try{
      const response = await axios.post(`${BACKEND_URL}/auth`, {
        name: val,
      })
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <input value={val} onChange={(e)=>setVal(e.target.value)} className={styles.inputbox} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AuthPage;