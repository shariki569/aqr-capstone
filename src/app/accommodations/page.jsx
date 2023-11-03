import Banner from '@/components/banner/Banner'
import styles from './accommodation.module.scss'
import image from '../../../public/homeImages/home1.webp'
import Image from 'next/image'
import accommImage from '../../../public/homeImages/home1.webp'
import { sanitize } from 'isomorphic-dompurify'
import Link from 'next/link'


async function getData() {
    const res = await fetch('https://capston-aq-backend-production.up.railway.app/api/accommodations', { next: { revalidate: 10 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Accommodations = async () => {

    const data = await getData()

    return (
        <>
            <Banner title="Accommodation" image={image} position='center' />
            <div className={styles.container}>
                <div className={styles.accommodation}>
                    <div className={styles.items}>
                        {data.map((facility) => (
                            <div className={styles.item} key={facility.Accommodation_Id}>
                                <div className={styles.imageWrap}>
                                    <Image src={accommImage} alt="Facility" />
                                </div>
                                <div className={styles.content}>
                                    <Link href={`/accommodation/${facility.Accommodation_Type}/${facility.Accommodation_Id}`}><h2>{facility.Accommodation_Title}</h2></Link>
                                    <h4>₱{facility.Accommodation_Price}</h4>
                                    <div className={styles.desc}>
                                        <p dangerouslySetInnerHTML={{__html: sanitize(facility.Accommodation_Desc)}}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>

                </div>

            </div>

        </>

    )
}

export default Accommodations
