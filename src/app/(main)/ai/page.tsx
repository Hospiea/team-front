"use client";
import { BACKEND_URL } from "@/config/config";
import { axiosInstance } from "@/utils/axiosInstance";
import { marked } from "marked";
import { useState } from "react";
import styles from "./style.module.css";

const AiPage = () => {
  const [result, setResult] = useState("");
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axiosInstance.post(`${BACKEND_URL}/ai/gen`, {
      content: val,
    });
    setResult(res.data.data);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div dangerouslySetInnerHTML={{ __html: marked(result) }} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <textarea
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={styles.input}
        />
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-black text-white w-fit p-2 rounded-xl"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default AiPage;
