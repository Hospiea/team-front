"use client";
import Link from "next/link";
import Hamburger from "./hamburger";
import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { Context } from "@/utils/context";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const { login, setLogin, setUserId, accessToken, setAccessToken } = useContext(Context);
  const pathname = usePathname();

  useEffect(() => {
    if(accessToken === "") {
      const token = localStorage.getItem("access_token");
      if(token) {
        setAccessToken(token);
      }
      const userId = localStorage.getItem("user_id");
      if(userId) {
        setUserId(Number(userId));
      }
    } else {
      const token = localStorage.getItem("access_token");
      if(token) {
        setAccessToken(token);
      };
      const userId = localStorage.getItem("user_id");
      if(userId) {
        setUserId(Number(userId));
      }
      setLogin(true);
    }
  }, [pathname]);

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
        <Link href="/">
          Rust
        </Link>
      </div>
    </header>
  )
}

export default HeaderComponent;