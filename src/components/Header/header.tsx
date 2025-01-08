"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import Hamburger from "./hamburger";
import styles from "./style.module.css";

const HeaderComponent = () => {
  
  useAuth();

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