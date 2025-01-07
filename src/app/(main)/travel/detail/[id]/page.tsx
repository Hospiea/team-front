"use client";
import { useGetTravel } from "@/hooks/useTravel";
import { useEffect } from "react";
import styles from "./style.module.css";


const TravelDetailPage = () => {

    const { data, error, isLoading } = useGetTravel();

  if(!isLoading && data) {
    return(
    <div className={styles.container}>
      <h1 className="absolute top-[32%]">{data.travel.title}</h1>
      <div className={styles.outline}>
        <h1>members</h1>
        {data.members.map((item, index) => {
          return(
            <div key={index}>
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
  }
}

export default TravelDetailPage;