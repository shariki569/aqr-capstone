import Banner from '@/components/banner/Banner'
import React from 'react'
import image from '../../../../../public/homeImages/home6.webp'
import styles from './accommsingle.module.scss'
import Image from 'next/image'
import AccommodationSidebar from '@/components/sidebar/AccommodationSidebar'

const Accommodation_Single = () => {
  return (
    <>
      <Banner title="Accommodation Single" image={image} position='center' size='small' />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src={image} alt="Accomm Single" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              This is a Single Page Accommodation
            </div>
            <div className={styles.description}>
              This is a Description
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <AccommodationSidebar/>
        </div>
      </div>
    </>
  )
}

export default Accommodation_Single
