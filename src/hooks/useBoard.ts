import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { get } from "./api";
import { BACKEND_URL } from "@/config/config";


const useBoard = (options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      const response = await get(`${BACKEND_URL}/board`);
      return response.data;
    },
    ...options,
  })
}


export default useBoard;