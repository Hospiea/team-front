import { BACKEND_URL } from "@/config/config";
import { BoardList } from "@/types/board";
import { axiosInstance } from "@/utils/axiosInstance";
import { Context } from "@/utils/context";
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
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

export default useTravel;