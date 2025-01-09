"use client";
import { BACKEND_URL } from "@/config/config";
import { DetailTravel, Travel } from "@/types/board";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";


const useTravel = (options?: UseQueryOptions<Travel[], unknown, Travel[]>) => {
  const {userId, setUserId} = useContext(Context);

  useEffect(() => {
    if(userId === -1) {
      setUserId(Number(localStorage.getItem("user_id")));
    }
  }, [userId]);

  return useQuery({
    queryKey: ["travel"],
    queryFn: async () => {
      const response = await axiosInstance.get<Travel[]>(`${BACKEND_URL}/travel/${userId}`);
      return response.data;
    },
    enabled: userId !== -1,
    ...options
  });
}

const useGetTravel = (options?: UseQueryOptions<null, unknown, Travel>) => {
  const search = usePathname();
  const id = search.trimStart().split("/travel/detail/")[1];

  return useQuery({
    queryKey: ["travel", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`${BACKEND_URL}/travel/detail/${id}`);
      return response.data
    },
    ...options
  });
}

export { useGetTravel, useTravel };
