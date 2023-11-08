
import styles from './blogbanner.module.scss'
import Image from 'next/image'
import blogimage from '../../../../public/blog3.svg'

const BlogBanner = ({title, subHeading}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.desc}>{subHeading}</p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={blogimage} alt="Aqua Cainta Blog"/>
                </div>
            </div>
        </div>
    )
}

export default BlogBanner
