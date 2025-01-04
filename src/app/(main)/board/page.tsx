"use client";
import useBoard from "@/hooks/useBoard";
import { useEffect } from "react";

const BoardPage = () => {

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
      </div>
    )
  }
  
}

export default BoardPage;