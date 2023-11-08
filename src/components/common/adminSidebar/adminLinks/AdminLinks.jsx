'use client'

import Link from "next/link"
import styles from './adminLinks.module.scss'

const AdminLinks = ({links}) => {
  return (
    <Link href={links.path} className={styles.container}>
       {links.icon}
       {links.title}
    </Link>
  )
}

export default AdminLinks
