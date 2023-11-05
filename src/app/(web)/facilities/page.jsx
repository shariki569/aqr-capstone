import Banner from '@/components/banner/Banner'
import React from 'react'
import styles from './facilities.module.scss'
import HeaderSection from '@/components/section/sectionWithHeader/HeaderSection'
import GallerySection from '@/components/section/sectionWithGallery/GallerySection'
const Facilities = () => {
  return (
    <>
      <Banner title="Facilities" image='https://resortcainta.netlify.app/upload/1697611859676heeeeee.jpg' />
      <div className={styles.container}>
        <HeaderSection
          main="Facilities"
          subheading="Explore our Facilities"
          desc="Our facilities cater to your every need. Whether you're hosting an event or seeking relaxation, we've got you covered."
        />
        <GallerySection/>
      </div>
    </>
  )
}

export default Facilities
