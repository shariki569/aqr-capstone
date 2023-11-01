import React from 'react'
import styles from './footer.module.scss'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { BiMobileAlt } from "react-icons/bi";
import Link from 'next/link';
const Footer = () => {

  const footerLinks = [
    { title: "About Us", path: "/about-us" },
    { title: "Privacy Policy", path: "/" },
    { title: "Resort Policy", path: "/" },
    { title: "FAQs", path: "/" },
    { title: "Blog", path: "/" },
  ]


  return (
    <footer className={styles.container}>
      <div className={styles.footerSection}>
        <div className={styles.footerItems}>
          <div className={styles.footerTitle}>
            <h3>ADDRESS</h3>
          </div>
          <div className={styles.footerDescription}>
            <FiMapPin className={styles.icon} size={25} />
            <p>Sitio Cainta, Barangay Pooc, City of Talisay, Cebu City, Philippines</p>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerTitle}>
            <h3>CONTACT US</h3>
          </div>
          <div className={styles.footerDescription}>
            <ul>
              <li>
                <FiPhone className={styles.icon} size={25} />
                <p>(032) 266 0914</p>
              </li>
              <li>
                <BiMobileAlt className={styles.icon} size={25} />
                <p>0919 503 6715</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerTitle}>
            <h3>EMAIL US</h3>
          </div>
          <div className={styles.footerDescription}>
            <FiMail className={styles.icon} size={25} />
            <p>aqua.cainta.resort@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerItems}>
          <div className={styles.footerTitle}>
            <h3>DISCOVER AQUA CAINTA RESORT</h3>
          </div>
          <div className={styles.footerLinks}>
            {footerLinks.map((footlink, index) => (
              <Link className={styles.subLink} href={footlink.path} key={index}>
                <span>{footlink.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>

      </div>
      {/* <div >
        @2023 Aqua Cainta all rights reserve
      </div>
      <div>
        
      </div> */}
    </footer>
  )
}

export default Footer
