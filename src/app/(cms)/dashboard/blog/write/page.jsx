'use client'

import React, { useState } from 'react'
import styles from './write.module.scss'
import TextInput from '@/components/forms/inputs/TextInput'
import { BiImageAdd, BiImport, BiPlusCircle, BiVideoPlus } from 'react-icons/bi'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import Button from '@/components/button/Button'


const Blog = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('');
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input placeholder='Title' className={styles.input} />
                <div className={styles.publishButton}>
                    <Button text="Publish" />
                </div>
            </div>
            <div className={styles.editor}>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setIsOpen(!isOpen)}><BiPlusCircle size={35} /></button>
                    {isOpen && (
                        <div className={styles.buttonWrap}>
                            <button className={styles.addButton}><span><BiImageAdd size={25} /></span></button>
                            <button className={styles.addButton}><span><BiImport size={25} /></span></button>
                            <button className={styles.addButton}><span><BiVideoPlus size={25} /></span></button>
                        </div>
                    )}
                </div>
                <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your Story' className={styles.textArea} />
            </div>
        </div>
    )
}

export default Blog
