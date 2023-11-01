import React from 'react'
import styles from './about.module.scss'
import Banner from '@/components/banner/Banner'
import bannerImg from '@/../../public/aboutImages/about.webp'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <Banner title="About Us" image={bannerImg} />
      </div>
    </>

  )
}

export default About
