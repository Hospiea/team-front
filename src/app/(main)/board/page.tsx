"use client";
import useBoard from "@/hooks/useBoard";
import { useEffect } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

const BoardPage = () => {
  const router = useRouter();

  const { data, error, isLoading } = useBoard();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (data) {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.outliner}>
            {data.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <div>글쓴이: {item.name}</div>
                  <div>글제목: {item.title}</div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            router.push("/board/enroll");
          }}
          className={styles.enroll}
        >
          글쓰기
        </button>
      </div>
    );
  }
};

export default BoardPage;
