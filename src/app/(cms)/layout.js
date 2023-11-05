"use client";

import { Inter, Quicksand } from "next/font/google";
// import AdminSideBar from "@/components/common/adminSidebar/AdminSideBar";
import styles from "./layout.module.scss";
import "../(web)/globals.scss";
import AuthProvider from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const quickSand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <AuthProvider>
          <div className={styles.container}>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
