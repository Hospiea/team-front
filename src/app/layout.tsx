import FooterComponent from "@/components/Footer/footer";
import HeaderComponent from "@/components/Header/header";
import type { Metadata } from "next";
import "./globals.css";
import styles from "./style.module.css";
import { QueryProvider } from "@/hooks/provider";
import ContextProvider from "@/utils/context";

export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <QueryProvider>
        <ContextProvider>
          <body className={`antialiased ${styles.outer}`}>
            <div className="font-custom">
              <HeaderComponent />
              <div className={styles.container}>{children}</div>
              <FooterComponent />
            </div>
          </body>
        </ContextProvider>
      </QueryProvider>
    </html>
  );
}
