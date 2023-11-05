"use client"
import React, { useState } from 'react'
import styles from './gallerySection.module.scss'
import Image from 'next/image'
const GallerySection = () => {

    const [isModalOpen,  setIsModalOpen] = useState(false)
    const [currentIndex, setIsCurrentIndex] = useState(0)

    const openModal = (index) => {
        setIsModalOpen(true)   
        setIsCurrentIndex(index)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
 
    return (
        <>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.imageWrap}>
                        <Image src='https://resortcainta.netlify.app/upload/1697611859676heeeeee.jpg' width={500} height={500} alt="Gallery" />
                        <button className={styles.btn} onClick>See Gallery</button>
                    </div>
                    <div className={styles.content}>
                        <p>Celebrate life's special moments in style at our spacious event hall. Whether it's a wedding, a conference, or a milestone celebration, our versatile space is the perfect backdrop for your event.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerySection
