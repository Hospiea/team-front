import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { get } from "./api";
import { BACKEND_URL } from "@/config/config";
import { BoardResponse } from "@/types/api";


const useBoard = (options?: UseQueryOptions<null, unknown, BoardResponse[]>) => {
  return useQuery<null, unknown, BoardResponse[]>({
    queryKey: ["board", `${BACKEND_URL}/board`],
    queryFn: async () => {
      const response = await get(`${BACKEND_URL}/board`);
      return response;
    },
    ...options,
  })
}


export default useBoard;