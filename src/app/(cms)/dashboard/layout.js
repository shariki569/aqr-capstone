"use client";
import AdminSideBar from "@/components/common/adminSidebar/AdminSideBar";
import styles from "./dashboard.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [session, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <AdminSideBar />
      {children}
    </div>
  );
}
