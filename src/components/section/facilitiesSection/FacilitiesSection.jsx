import Image from 'next/image'
import HeaderSection from '../sectionWithHeader/HeaderSection'
import styles from './facilitiesSection.module.scss'
import React from 'react'
import image from '../../../../public/HEADER-HOMEPAGE.webp'
import Link from 'next/link'


async function getData() {
    const res = await fetch('https://capston-aq-backend-production.up.railway.app/api/facilities', { next: { revalidate: 10 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


const FacilitiesSection = async () => {

    const data = await getData();

    return (
        <>
            <div className={styles.container}>
                <HeaderSection main="Facilities" subheading="Welcome to Aqua Cainta Resorts Paradise" desc="Our facilities cater to your every need. Whether you're hosting an event or seeking relaxation, we've got you covered." />

                <div className={styles.facilities}>
                    <div className={styles.facilityItems}>
                        {data.map((facility) => (
                            <div className={styles.facilityItem} key={facility.Fac_Id}>
                                <div className={styles.imageWrap}>
                                    <Image src={image} alt="Facility"></Image>
                                </div>
                                <div className={styles.content}>
                                    <h2>{facility.Fac_Title}</h2>
                                    <div className={styles.description}>
                                        <p>{facility.Fac_Desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className={styles.linkButton}>
                        <Link href="/facilities" className={`link-button-2 ${styles.link}`}>
                            <span>View All</span>
                        </Link>
                    </div>



                </div>

            </div>
        </>
    )
}

export default FacilitiesSection
