"use client"
import React from 'react'
import styles from './admin.module.scss'
import logo from '../../../../public/AquaLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { dashLinks } from './dashboardLinks'
import AdminLinks from './adminLinks/AdminLinks'

const AdminSideBar = () => {
    const { data: session, status } = useSession();

    console.log(session, status)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt='logo' />
                </Link>
            </div>
            <div className={styles.links}>
                {status === "authenticated" && (
                    <h3>{session?.user.name}</h3>
                )}
                <ul className={styles.items}>
                    {dashLinks.map((links, index) => (
                        <li key={index} className={styles.link}>
                            <AdminLinks links={links}/>
                        </li>
                        // <Link key={index} className={styles.link} href={links.path}>{links.title}</Link>
                    ))}
                </ul>
            </div>
            <div className={styles.logout} onClick={() => signOut()}>
                Logout
            </div>
        </div>
    )
}

export default AdminSideBar
