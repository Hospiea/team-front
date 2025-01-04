"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { BoardEnrollment, defaultBoardEnrollment } from "@/types/board";
import axios from "axios";
import { BACKEND_URL } from "@/config/config";
import { useRouter } from "next/navigation";

const BoardEnrollPage = () => {
  const router = useRouter();
  const [input, setInput] = useState<BoardEnrollment>(defaultBoardEnrollment);

  const handleSubmit = async () => {
    try{
      const response = await axios.post(`${BACKEND_URL}/board/create`, {
        name: input.name,
        title: input.title,
        content: input.content,
      });
      if(response) {
        alert("등록되었습니다.");
        router.back();
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className={styles.input_container}>
        <div className="space-x-2">
          <input value={input.name} onChange={(e)=>{
            setInput({...input, name: e.target.value})
          }} />
          <span>이름</span>
        </div>
        <div className="space-x-2">
          <input value={input.title} onChange={(e) => {
            setInput({...input, title: e.target.value})
          }} />
          <span>제목</span>
        </div>
        <div className="space-x-2">
          <input value={input.content} onChange={(e) => {
            setInput({...input, content: e.target.value})
          }} />
          <span>내용</span>
        </div>
        <button onClick={() => {
          handleSubmit();
        }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BoardEnrollPage;
