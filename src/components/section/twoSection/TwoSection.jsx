import React from 'react'
import styles from './twosection.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Card from '@/components/card/Card';
const TwoSection = ({ images, title, content, icon, cta, inverse }) => {


    const flexDirection = inverse ?  styles.rowReverse : '';


    return (

        <div className={`${styles.container} ${flexDirection}`}>
            <div className={styles.imageContainer}>
                <div className={styles.imageGrid}>
                    {images && images.map((img, index) => (
                        <div className={`${styles.imageItem} ${index === 0 ? styles.fullWidth : ''}`} key={index}>
                            <Image src={img} alt={img} className={styles.img} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.items}>
                    <h4>{title}</h4>
                    {icon && <span>{icon}</span>}
                    <p>{content}</p>
                    {cta && <div>
                        <Link href={cta}>Learn More</Link>
                    </div>}
                </div>
            </div>

        </div>

    )
}

export default TwoSection
