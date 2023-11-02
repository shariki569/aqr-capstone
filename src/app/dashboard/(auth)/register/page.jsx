"use client"
import React, { useState } from 'react'
import styles from './register.module.scss'
import TextInput from '@/components/forms/inputs/TextInput'
import Button from '@/components/button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Register = () => {
  const [err, setErr] = useState(false);



  const handleSubmit = async (e) => {
    const router = useRouter();
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      res.status === 201 && router.push('/dashboard/login?success=Account created successfully');
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.login}>
          <h2 className={styles.title}>Create an Account</h2>
          <form action="" onSubmit={handleSubmit}>
            <TextInput label="Username" type='text' />
            <TextInput label="Email" type='email' />
            <TextInput label="Password" type="password" />
            <Button text="Register" />
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
