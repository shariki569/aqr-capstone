"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import logo from 'public/AquaLogo.svg'
import Image from 'next/image'
import { links } from './links'
import AuthLinks from '@/components/authLinks/AuthLinks'

const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        // Add an initial call to handleScroll to set the initial state
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = [styles.container];
    if (isScrolled) {
        navbarClasses.push(styles.scrolled);
    }


    return (
        <nav className={navbarClasses.join(' ')}>
            <div className={styles.logo}>
                <Link href="/"><Image src={logo} alt='logo'  /></Link>
            </div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
           <AuthLinks/>
        </nav>
    )
}

export default Navbar
