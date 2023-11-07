"use client"
import React, { useState } from 'react'
import styles from './gallerySection.module.scss'
import Image from 'next/image'
import ModalGallery from './ModalGallery'
import { BiImages } from "react-icons/bi";
const GallerySection = ({ title, desc, galleries, featuredImg, key }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentIndex, setIsCurrentIndex] = useState(0)
    const allGallery = [featuredImg, ...galleries]

    // const images = [
    //     'https://images.pexels.com/photos/11970286/pexels-photo-11970286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     'https://resortcainta.netlify.app/upload/1697611859676heeeeee.jpg'
    // ]

    const openModal = (index) => {
        setIsModalOpen(true)
        setIsCurrentIndex(index)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    const handleForward = () => {
        const totalLength = allGallery.length;
        const newIndex = (currentIndex + 1) % totalLength;
        setIsCurrentIndex(newIndex)
    }

    const handleBackward = () => {
        const totalLength = allGallery.length;
        const newIndex = (currentIndex - 1 + totalLength) % totalLength;
        setIsCurrentIndex(newIndex)
    }

    return (
        <>
            <div key={key} className={styles.container}>
                <div className={styles.imageWrap}>
                    <Image className={styles.img} src={featuredImg} alt="Gallery" height={700} width={700} />
                    <button className={styles.btn} onClick={() => openModal(0)}><BiImages size={20}/></button>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
            {isModalOpen && (
                <ModalGallery
                    closeModal={closeModal}
                    currentIndex={currentIndex}
                    images={allGallery}
                    handleForward={handleForward}
                    handleBackward={handleBackward}
                />
            )}

        </>
    )
}

export default GallerySection
