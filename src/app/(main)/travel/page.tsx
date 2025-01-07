"use client";

import { useTravel } from "@/hooks/useTravel";
import { BoardList } from "@/types/board";
import { useEffect } from "react";
import TravelCardComponent from "./components/Card";
import styles from "./style.module.css";


const TravelPage = () => {

  const { data, error, isLoading } = useTravel();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if(!isLoading) {
    return(
    <div className={styles.container}>
      <div className="absolute left-[39%] top-[8%]">
        <h1 className="text-lg">참여중인 모임</h1>
      </div>
      {data?.map((item: BoardList, index: number) => { 
        return(
          <TravelCardComponent key={index} {...item} />
        )
      })}
    </div>
  )
  }
  
}

export default TravelPage;