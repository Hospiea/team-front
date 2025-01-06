"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import axios from "axios"

const get = async (url: string) => {
  try{
    const { data } = await axiosInstance.get(url);
    return data;
  } catch(e) {
    console.log(e);
  }
}

const post = async (url: string, body: object) => {
  try{
    const { data } = await axiosInstance.post(url, body);
    return data;
  } catch(e) {
    console.log(e);
  }
}

export { get, post }