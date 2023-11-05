import Image from 'next/image'
import styles from './banner.module.scss'

const Banner = ({ image, title, position = 'center', size = 'large'}) => {

    const containerSize = `${styles.container} ${styles[size]}`


    return (
        <div className={containerSize}>
            <Image src={image} alt={title} layout="fill" objectPosition={position}/>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    )
}

export default Banner
