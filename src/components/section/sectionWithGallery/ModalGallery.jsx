"use client"
import React from 'react'
import styles from './modal.module.scss'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
const ModalGallery = ({ closeModal, currentIndex, images, handleBackward, handleForward }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      closeModal()
    }
  }

  return (
    <div className={`${styles.modal} dismiss`} onClick={handleClick}>

      <div className={styles.overlay}>
        <div className={styles.imageGallery}>
          {images.map((item, index) => (
            <Image alt={images} key={index} className={`${styles.image} ${index === currentIndex ? styles.active : ''}`} src={item} height={300} width={300} />
          ))}
        </div>
        <button className={`${styles.closeButton} dismiss`} onClick={handleClick}>X</button>
      </div>
      <span className={styles.arrowLeft} onClick={handleBackward}>
        <FiArrowLeft size={30} />
      </span>
      <span className={styles.arrowRight} onClick={handleForward}>
        <FiArrowRight size={30} />
      </span>
    </div>
  )
}

export default ModalGallery
