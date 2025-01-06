"use client";
import { BACKEND_URL } from "@/config/config";
import { BoardEnrollment, defaultBoardEnrollment } from "@/types/board";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import styles from "./style.module.css";

const BoardEnrollPage = () => {
  const router = useRouter();
  const [input, setInput] = useState<BoardEnrollment>(defaultBoardEnrollment);
  const { userId } = useContext(Context);

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(`${BACKEND_URL}/board`, {
        name: input.name,
        title: input.title,
        content: input.content,
        user_id: userId,
      });
      if (response) {
        alert("등록되었습니다.");
        router.back();
      }
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <div className={styles.outline}>
      <div className="relative mt-[20%]">
        <span className="absolute left-[-30%]">닉네임</span>
        <input value={input.name} onChange={(e)=>{
          setInput({...input, name: e.target.value})
        }} className="w-60 border border-black rounded-lg shadow" />
      </div>

      <div className="relative">
        <span className="absolute left-[-30%]">제목</span>
        <input value={input.title} onChange={(e) => {
          setInput({...input, title: e.target.value})
        }} className="w-60 border border-black rounded-lg shadow" />
      </div>

      <div className="relative">
        <span className="absolute left-[-30%]">내용</span>
        <textarea value={input.content} onChange={(e) => {
          setInput({...input, content: e.target.value})
        }} className="w-60 h-72 border border-black rounded-lg shadow" />
      </div>

      <div>
        <button onClick={handleSubmit} className="p-3 bg-black text-white rounded-2xl">Submit</button>
      </div>
    </div>
  );
};

export default BoardEnrollPage;
