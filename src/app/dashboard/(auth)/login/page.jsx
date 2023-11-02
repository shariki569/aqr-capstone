"use client"

import React from 'react'
import styles from './login.module.scss'
import Card from '@/components/card/Card'
import TextInput from '@/components/forms/inputs/TextInput'
import Button from '@/components/button/Button'
import { signIn, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {

  const { data, status } = useSession();
  console.log(data, status)
  return (

    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.login}>
        <h2 className={styles.title}>Login</h2>
          <form action="" >
            <TextInput label="Username" type='text' />
            <TextInput label="Email" type='email' />
            <TextInput label="Password" type="password" />
            <Button text="Login" onClick={''} />
          </form>
          <div className={styles.link}>
            <Link href='/dashboard/register'>Register</Link>
          </div>
        </div>
        <div className={styles.socialLogin}>
          <div className={styles.socialItems} onClick={() => signIn('google')}>Sign in with Google</div>
        </div>
      </div>
    </div>

  )
}

export default Login
