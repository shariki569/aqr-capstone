"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import logo from 'public/AquaLogo.svg'
import Image from 'next/image'
import { links } from './links'
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
            <Link href="/"><Image src={logo} alt='logo' width={'75'} height={'75'} /></Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
            <div>
                <button onClick={() => console.log('hello')}>Log Out</button>
            </div>
        </nav>
    )
}

export default Navbar
