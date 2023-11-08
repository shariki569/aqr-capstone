"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './authLinks.module.scss'
import { links } from '../common/navbar/links'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    // const status = "Not authenticated"

    const { data: session, status } = useSession();

    // const burgerClass = [styles.burger]
    const toggleMenu = () => {
        setOpen(!open)
    }

    console.log(session)
    return (
        <div className={styles.auth}>
            {status == "unauthenticated" ? (
                <Link href="/login" className={styles.link}>Login</Link>
            ) : (
                <div className={styles.links}>
                <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                <span className={styles.link} onClick={signOut}>Logout</span>
                </div>

            )}

            <div className={`${styles.burger} ${open ? styles.cross : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <div className={styles.links}>
                        {links.map((link) => (
                            <Link key={link.id} href={link.url}>{link.title}</Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AuthLinks
