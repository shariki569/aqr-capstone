'use client'

import React, { useEffect, useMemo, useState } from 'react'
import styles from './write.module.scss'
import TextInput from '@/components/forms/inputs/TextInput'
import { BiImageAdd, BiImport, BiPlusCircle, BiVideoPlus } from 'react-icons/bi'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import Button from '@/components/button/Button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { app } from '@/utilities/firebase'
import axios from 'axios'
import dynamic from 'next/dynamic'



const storage = getStorage(app);

const AddBlog = () => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), {ssr: false}), []);
    const { status } = useSession()
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [slug, setSlug] = useState('');


    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);


            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    });
                }
            );


        }

        file && upload();
    }, [file])


    if (status === 'unauthorized') {
        router.push('/login')
    }

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.APP_URL}/api/posts`, {
                PostTitle: title,
                PostDesc: desc,
                PostImg: media,
                PostSlug: slugify(title),
                catSlug: 'lifestyle'
            })
        } catch (err) {
            console.log(err)
        }

    }

   

    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input placeholder='Title' className={styles.input} onChange={e => setTitle(e.target.value)} value={title} />
                <div className={styles.publishButton}>
                    <Button onClick={handleSubmit} text="Publish" />
                </div>
            </div>
            <div className={styles.editor}>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setIsOpen(!isOpen)}><BiPlusCircle size={35} /></button>
                    {isOpen && (
                        <div className={styles.buttonWrap}>
                            <input
                                type="file"
                                id="image"
                                onChange={e => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                            <button className={styles.addButton}>
                                <label htmlFor="image">
                                    <span><BiImageAdd size={25} /></span>
                                </label>
                            </button>
                            <button className={styles.addButton}>
                                <span><BiImport size={25} /></span>
                            </button>
                            <button className={styles.addButton}>
                                <span><BiVideoPlus size={25} /></span>
                            </button>
                        </div>
                    )}
                </div>
                <ReactQuill theme='bubble' value={desc} onChange={setDesc} placeholder='Tell your Story' className={styles.textArea} />
            </div>
        </div>
    )
}

export default AddBlog
