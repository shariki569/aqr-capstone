
import React from 'react'
import styles from './footer.module.scss'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { BiMobileAlt } from "react-icons/bi";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import ShareButtons from '@/components/social-media-share/ShareButtons';

async function getData() {
  const res = await fetch(`http://localhost:3000/api/contact/1`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Footer = async () => {

  const data = await getData()

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
            <p>{data?.Contact_Address}</p>
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
                <p>{data?.Contact_Telphone}</p>
              </li>
              <li>
                <BiMobileAlt className={styles.icon} size={25} />
                <p>{data?.Contact_Cellphone}</p>
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
            <p>{data?.Contact_Email}</p>
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
        <div className={styles.footerItems}>
          <div className={styles.footerTitle}>
            <h3>SHARE US ON</h3>
            <span>
              <p className={styles.twitter}><FaXTwitter /></p>
              <p className={styles.facebook}> <FaFacebookF /></p>
              <p className={styles.instagram}> <FaInstagram /></p>
            </span>
            <ShareButtons />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
