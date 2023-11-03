"use client"

import React from 'react'
import styles from './button.module.scss'

const Button = ({ text, onClick, type }) => {
  return (

    <button onClick={onClick} className={styles.btn} type={type}>{text}</button>

  )
}

export default Button
