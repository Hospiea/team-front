"use client";
import Link from "next/link";
import Hamburger from "./hamburger";
import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { Context } from "@/utils/context";

const HeaderComponent = () => {
  const { accessToken, setAccessToken } = useContext(Context);

  useEffect(() => {
    if(accessToken === "") {
      const token = localStorage.getItem("access_token");
      if(token) {
        setAccessToken(token);
      }
    }
  }, []);

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
        <Link href="/">
          Blog
        </Link>
      </div>
    </header>
  )
}

export default HeaderComponent;