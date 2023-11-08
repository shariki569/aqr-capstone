"use client"
import { FacebookShareButton, TwitterShareButton } from 'next-share'
import React from 'react'
import styles from './sharebuttons.module.scss';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
// import Document from 'next/document';
import { useRouter } from 'next/navigation';

const ShareButtons = () => {
    const router = useRouter();
    const currentURL = process.env.NEXT_PUBLIC_VERCEL_URL + router.asPath;

    return (
        <div>
            <span className={styles.socialIcons}>
                <TwitterShareButton url={currentURL}>
                    <p className={styles.twitter}><FaXTwitter /></p>
                </TwitterShareButton>
                <FacebookShareButton url={currentURL}>
                    <p className={styles.facebook}> <FaFacebookF /></p>
                </FacebookShareButton>
                <a href={`https://www.instagram.com/share?url=${currentURL}`} target="_blank" rel="noopener noreferrer">
                    <p className={styles.instagram}> <FaInstagram /></p>
                </a>
            </span>
        </div>
    )
}

export default ShareButtons
