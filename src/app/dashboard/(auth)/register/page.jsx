"use client"
import React, { useState } from 'react'
import styles from './register.module.scss'
import TextInput from '@/components/forms/inputs/TextInput'
import Button from '@/components/button/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    
      const userInfo = await res.json();
      console.log(userInfo)
      router.push("/dashboard/login");

    } catch (err) {
      setErr(true);
      console.error(err)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.login}>
          <h2 className={styles.title}>Create an Account</h2>
          <form action="" onSubmit={handleSubmit}>
            <TextInput
              label="Username"
              type='text'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextInput
              label="Email"
              type='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextInput
              label="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button text="Register" type='submit' />
            {/* <button>Register</button> */}
          </form>
          {err && 'Something went wrong'}
        </div>
        <div className={styles.link}>
          <Link href='/dashboard/login'>Already have an account? Click Here</Link>
        </div>
        {/* <div className={styles.socialLogin}>
        <div className={styles.socialItems} onClick={() => signIn('google')}>Sign in with Google</div>
      </div> */}
      </div>
    </div>

  )
}

export default Register
