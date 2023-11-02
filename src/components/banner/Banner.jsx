import Image from 'next/image'
import styles from './banner.module.scss'

const Banner = ({ image, title, position = 'center' }) => {
    return (
        <div className={styles.container}>

            <Image src={image} alt={title} layout="fill" objectPosition={position}/>

            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Banner
