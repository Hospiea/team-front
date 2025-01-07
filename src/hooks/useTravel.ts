import { BACKEND_URL } from "@/config/config";
import { BoardList, DetailTravel } from "@/types/board";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext } from "react";


const useTravel = (options?: UseQueryOptions<null, unknown, BoardList[]>) => {
  const {userId} = useContext(Context);

  return useQuery({
    queryKey: ["travel"],
    queryFn: async () => {
      const response = await axiosInstance.get(`${BACKEND_URL}/travel/${userId}`);
      return response.data
    },
    ...options
    });
}

const useGetTravel = (options?: UseQueryOptions<null, unknown, DetailTravel>) => {
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

export { useTravel, useGetTravel };