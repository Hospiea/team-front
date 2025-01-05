"use client";
import { Suspense } from "react";
import KakaoAuthContentPage from "./content";

const KakaoLoginPage = () => {
  

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          <h1>로그인 중입니다...</h1>
        </div>
      }>
        <KakaoAuthContentPage />
      </Suspense>
  );
};

export default KakaoLoginPage;
