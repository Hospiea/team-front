"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const init = async () => {
    try{
      const response = await axios.post("http://localhost:5050/user", {
        name: "Hello",
        email: "asdf",
        gender: "MALE",
        age: 24,
      });
      console.log(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img src="/images/main.png" alt="No Source" />
      </div>
    </div>
  );
}
