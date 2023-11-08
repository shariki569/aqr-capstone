import Image from 'next/image'
import styles from './page.module.scss'
import HeroBanner from 'public/HEADER-HOMEPAGE.webp'
import HeaderSection from '@/components/section/sectionWithHeader/HeaderSection'
import TwoSection from '@/components/section/twoSection/TwoSection'
import home3 from 'public/homeImages/home2.webp'
import home2 from 'public/homeImages/home3.webp'
import home1 from 'public/homeImages/home1.webp'
import home4 from 'public/homeImages/home4.webp'
import home5 from 'public/homeImages/home5.webp'
import home6 from 'public/homeImages/home6.webp'
import FacilitiesSection from '@/components/section/facilitiesSection/FacilitiesSection'






export default function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={HeroBanner} alt="Hero Banner" className={styles.img} />
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Embrace Relaxation</h1>
          <p className={styles.description}>Surrender to the Allure of Our Resort</p>
        </div>
      </div>
      <HeaderSection main="Escape to Your Perfect Getaway" subheading="Welcome to Aqua Cainta Resorts Paradise" desc="At Aqua Cainta Resort, we believe in creating more than just vacations; we craft unforgettable staycation experiences. Our pristine haven offers a symphony of relaxation, adventure, and indulgence, making it the ultimate destination for your next retreat." />
      <div className={styles.container}>
        <HeaderSection main="Discover Our Oasis" />
        <TwoSection
          title="Rooms"
          content="Dip yourself in the perfect blend of comfort and affordability with our meticulously crafted rooms designed to cater to your every need. Whether you're looking for an intimate retreat for a romantic escape or a spacious haven for your family, our accommodations offer a haven of relaxation that's both inviting and budget-friendly"
          images={
            [
              home1,
              home2,
              home3
            ]
          }
        />
        <TwoSection
          inverse
          title="Rejuvenation Haven"
          content="Leave the hustle and bustle of daily life far behind as you immerse yourself in the rejuvenating ambiance of our resort. Our serene surroundings provide the perfect getaway for recharging your mind, body, and soul."
          images={
            [
              home4,
              home5,
              home6
            ]
          }
        />
        <FacilitiesSection/>
      </div>
    </div>

  )
}
