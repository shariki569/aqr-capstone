import styles from './contact.module.scss'
import Banner from '@/components/banner/Banner'
import bannerImg from '@/../../public/contactImages/contact1.webp'
import ContactForm from '@/components/forms/ContactForm'

const Contact = () => {

  return (
    <>
      <Banner title="Contact Us" image={bannerImg} position='bottom'/>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2>Contact Us through</h2>
        </div>
        <div className={styles.item}>
          <ContactForm/>
        </div>
      </div>
    </>

  )
}

export default Contact
