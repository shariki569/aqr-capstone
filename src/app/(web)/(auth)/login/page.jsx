"use client"

import React, { useState } from 'react'
import styles from './login.module.scss'
import TextInput from '@/components/forms/inputs/TextInput'
import Button from '@/components/button/Button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      ...user,
      redirect: false
    });
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.login}>
          <h2 className={styles.title}>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <TextInput
              label="Email"
              type='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextInput
              label="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button text="Login" />
          </form>
          <div className={styles.link}>
            <Link href='/register'>Register</Link>
          </div>
        </div>
        {/* <div className={styles.socialLogin}>
          <div className={styles.socialItems} onClick={() => signIn('google')}>Sign in with Google</div>
        </div> */}
      </div>
    </div>

  )
}

export default Login
