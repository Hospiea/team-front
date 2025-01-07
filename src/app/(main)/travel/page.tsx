"use client";

import useTravel from "@/hooks/useTravel";
import { BoardList } from "@/types/board";
import { useEffect } from "react";


const TravelPage = () => {

  const { data, error, isLoading } = useTravel();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return(
    <div>
      {data.map((item: BoardList, index: number) => { 
        return(
          <div key={index}>
            <div>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TravelPage;