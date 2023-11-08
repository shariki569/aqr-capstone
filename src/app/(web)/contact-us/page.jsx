import styles from './contact.module.scss'
import Banner from '@/components/banner/Banner'
import bannerImg from '@/../../public/contactImages/contact1.webp'
import ContactForm from '@/components/forms/ContactForm'



export const metadata = {
  title: "Contact Aqua Cainta: Get in Touch with Our Resort in Cebu City",
  description: "Reach out to Aqua Cainta Resort in Talisay, Cebu City. We’re here to answer your queries and ensure you have a memorable stay. Contact us today!",
  openGraph: {
    title: "Contact Aqua Cainta: Get in Touch with Our Resort in Cebu City",
    description: "Reach out to Aqua Cainta Resort in Talisay, Cebu City. We’re here to answer your queries and ensure you have a memorable stay. Contact us today!",
  },
  twitter: {
    title: "Contact Aqua Cainta: Get in Touch with Our Resort in Cebu City",
    description: "Reach out to Aqua Cainta Resort in Talisay, Cebu City. We’re here to answer your queries and ensure you have a memorable stay. Contact us today!",
  }
}


const Contact = () => {



  return (
    <div className={styles.contactUs}>
      <Banner title="Contact Us" image={bannerImg} position='bottom'/>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2>Contact Us through</h2>
        </div>
        <div className={styles.item}>
          <ContactForm/>
        </div>
      </div>
    </div>

  )
}

export default Contact
