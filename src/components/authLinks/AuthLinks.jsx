"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './authLinks.module.scss'
import { links } from '../common/navbar/links'
const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    const status = "Not authenticated"

    const burgerClass = [styles.burger]
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            {status == "Not authenticated" ? (
                <Link href="/dashboard/login" className={styles.link}>Login</Link>
            ) : (
                <>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={`${styles.burger} ${open ? styles.cross : '' }`} onClick={toggleMenu}>
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
        </>
    )
}

export default AuthLinks
