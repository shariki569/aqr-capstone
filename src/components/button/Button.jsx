import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

const Button = ({url, text}) => {
  return (
    <Link href={url}>
        <button style={styles.container}>{text}</button>
    </Link>
  )
}

export default Button
