"use client";
import AdminSideBar from "@/components/common/adminSidebar/AdminSideBar";
import styles from "./layout.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminNavbar from "@/components/common/adminNavbar/AdminNavbar";
export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [session, router]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <AdminSideBar />
      </div>

      <div className={styles.wrapper}>
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
