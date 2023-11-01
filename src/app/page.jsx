import Image from 'next/image'
import styles from '../styles/page.module.scss'
import HeroBanner from 'public/HEADER-HOMEPAGE.webp'
import HeaderSection from '@/components/section/sectionWithHeader/HeaderSection'


export default function Home() {


  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={HeroBanner} alt="Hero Banner" className={styles.img} />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Embrace Relaxation</h1>
        <p className={styles.description}>Surrender to the Allure of Our Resort</p>
      </div>
      <HeaderSection main="Escape to Your Perfect Getaway" subheading="Welcome to Aqua Cainta Resorts Paradise" desc="At Aqua Cainta Resort, we believe in creating more than just vacations; we craft unforgettable staycation experiences. Our pristine haven offers a symphony of relaxation, adventure, and indulgence, making it the ultimate destination for your next retreat.e" />
    </div>
  )
}
