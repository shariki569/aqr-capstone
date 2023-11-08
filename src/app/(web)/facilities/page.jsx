import Banner from '@/components/banner/Banner'
import React from 'react'
import styles from './facilities.module.scss'
import HeaderSection from '@/components/section/sectionWithHeader/HeaderSection'
import GallerySection from '@/components/section/sectionWithGallery/GallerySection'
import { facilitiesData } from '@/components/section/facilitiesSection/facilitiesSectionData'
const Facilities = () => {





  return (
    <div className={styles.facility}>
      <Banner title="Facilities" image='https://resortcainta.netlify.app/upload/1697611859676heeeeee.jpg' />
      <div className={styles.container}>
        <HeaderSection
          main="Facilities"
          subheading="Explore our Facilities"
          desc="Our facilities cater to your every need. Whether you're hosting an event or seeking relaxation, we've got you covered."
        />
      
          {facilitiesData.map((facility) => (
            <GallerySection
              key={facility.Fac_Id}
              featuredImg={facility.Featured_Image}
              galleries={facility.Gallery_Images}
              title={facility.Fac_Title}
              desc={facility.Fac_Desc}
            />))}
  

      </div>
    </div>
  )
}

export default Facilities
