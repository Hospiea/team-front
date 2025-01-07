"use client";
import Link from "next/link";
import Hamburger from "./hamburger";
import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { Context } from "@/utils/context";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";

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