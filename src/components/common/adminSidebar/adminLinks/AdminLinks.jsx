'use client'

import Link from "next/link"
import styles from './adminLinks.module.scss'
import { usePathname } from "next/navigation"


const AdminLinks = ({links}) => {

  const pathname = usePathname()
  return (
    <Link href={links.path} className={`${styles.container} ${pathname === links.path && styles.active}`}>
       {links.icon}
       {links.title}
    </Link>
  )
}

export default AdminLinks
