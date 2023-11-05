"use client"
import React, { useEffect } from 'react'
import styles from './dashboard.module.scss'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard = () => {

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
      Dashboard
    </div>
  )
}

export default Dashboard;

