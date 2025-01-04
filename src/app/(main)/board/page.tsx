"use client";
import useBoard from "@/hooks/useBoard";
import { useEffect } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

const BoardPage = () => {
  const router = useRouter();

  const { data, error, isLoading } = useBoard();

  useEffect(() => {
    if(data) {
      console.log(data);
    }
  }, [data]);

  if(data) {
    return(
      <div>
        {data && data[0].content}

        <button onClick={() => {
          router.push("/board/enroll")
        }} className={styles.enroll}>
          글쓰기
        </button>
      </div>
    )
  }
  
}

export default BoardPage;