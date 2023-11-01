import styles from './headerSection.module.scss';
import React from 'react'

const HeaderSection = ({ subheading, main, desc, textColor }) => {
   
    
    return (
        <section className={styles.container}>
            {subheading && <h4>{subheading}</h4>}
            {main && <h2>{main}</h2>}
            {desc && <p>{desc}</p>}
        </section>
    )
}

export default HeaderSection
