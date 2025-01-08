"use client";
import { useGetTravel } from "@/hooks/useTravel";
import { useEffect } from "react";
import styles from "./style.module.css";
import ModalComponent from "@/components/Modal/Modal";


const TravelDetailPage = () => {

    const { data, error, isLoading } = useGetTravel();

  if(!isLoading && data) {
    return(
    <div className={styles.container}>
      <h1 className="absolute top-[32%]">{data.travel.title}</h1>
      <div className={styles.outline}>
        <h1>참여인원</h1>
        {data.members.map((item, index) => {
          return(
            <div key={index}>
              {item.name}
            </div>
          )
        })}
      </div>
        <ModalComponent id={data.travel.id} />
    </div>
  )
  }
}

export default TravelDetailPage;