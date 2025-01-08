"use client";
import { BACKEND_URL } from "@/config/config";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { usePathname } from "next/navigation"
import { useContext, useEffect } from "react";


const SharePage = () => {
  const path = usePathname();
  const { userId } = useContext(Context);

  const init = async () => {
    try{
      const response = await axiosInstance.get(`${BACKEND_URL}/travel${path}?userId=${userId}`);
      console.log(response.data);
    } catch(e) {
      console.log(e);
    }

  }

  useEffect(() => {
    init();
  }, []);

  return(
    <div>
      
    </div>
  )
}

export default SharePage;