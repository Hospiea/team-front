"use client";
import { BACKEND_URL } from "@/config/config";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { useContext, useState } from "react";
import styles from "./style.module.css";


const CreateTravelPage = () => {
  const { userId, setUserId } = useContext(Context);
  const [value, setValue] = useState("");

  const handleCreateTravel = async () => {
      try {
        if(value === "") {
          alert("모임명을 입력해주세요");
          return;
        }

        if(userId === -1) {
          localStorage.getItem("user_id");
          setUserId(Number(localStorage.getItem("user_id")));
        }

        const response = await axiosInstance.post(`${BACKEND_URL}/travel`, {
          id: userId,
          title: value,
        });
        
        alert(`모임이 생성되었습니다.`);
      } catch(e) {
        console.log(e);
      }
    }

  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
       <span>모임명: </span>
       <input value={value} onChange={(e) => {
         setValue(e.target.value);
       }} className={styles.inputs} />
       </div>
       <button onClick={handleCreateTravel} className={styles.button}>모임생성</button>
    </div>
  )
}

export default CreateTravelPage;