import { BACKEND_URL } from "@/config/config";
import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
})