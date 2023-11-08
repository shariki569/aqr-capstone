import React from 'react'
import styles from './about.module.scss'
import Banner from '@/components/banner/Banner'
import bannerImg from '@/../../public/aboutImages/about.webp'

const About = () => {
  return (
    <div className={styles.about}>
      <Banner title="About Us" image={bannerImg} />
      <div className={styles.container}>
        <div className={styles.item}>
    
        </div>
        <div className={styles.item}>

        </div>
      </div>
    </div>

  )
}

export default About
