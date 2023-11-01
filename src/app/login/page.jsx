"use client"
import Card from '@/components/card/Card'
import styles from './login.module.scss'


const Login = () => {
    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.socialLogin}>
                    <div className={styles.socialItems}>Sign in with Google</div>
                    <div className={styles.socialItems}>Sign in with Github</div>
                    <div className={styles.socialItems}>Sign in with Facebook</div>
                </div>
            </Card>
        </div>
    )
}

export default Login
