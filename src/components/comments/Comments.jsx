"use client"
import { useSession } from 'next-auth/react';
import Button from '../button/Button'
import TextArea from '../forms/inputs/TextArea'
import style from './comments.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const { data: session, status } = useSession();
    return (
        <div className={style.container}>
            <h5 className={style.title}>Comments</h5>
            {status === "authenticated" ?
                (<div className={style.write}>
                    <TextArea label="Write a comment" onChange={(e) => setComment(e.target.value)} />
                    <div className="button">
                        <Button text='Post' />
                    </div>
                </div>
                ) : (
                    <Link href="/login">Login to Post a Comment</Link>
                )
            }
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <div className={style.userGroup}>
                            <Image className={style.image} src={session?.user?.image} alt="user" width={50} height={50} />
                            <div className={style.userInfo}>
                                <span className={style.name}>Kyutie ko</span>
                                <span>Jan 23, 2023</span>
                            </div>
                        </div>
                        <p>
                            Heaad ahwhafhaahwhafhaahwhafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafha
                        </p>
                    </div>
                </div>
                <div className={style.comment}>
                    <div className={style.user}>
                        <div className={style.userGroup}>
                            <Image className={style.image} src={session?.user?.image} alt="user" width={50} height={50} />
                            <div className={style.userInfo}>
                                <span className={style.name}>Kyutie ko</span>
                                <span>Jan 23, 2023</span>
                            </div>
                        </div>
                        <p>
                            Heaad ahwhafhaahwhafhaahwhafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafha
                        </p>
                    </div>
                </div>
                <div className={style.comment}>
                    <div className={style.user}>
                        <div className={style.userGroup}>
                            <Image className={style.image} src={session?.user?.image} alt="user" width={50} height={50} />
                            <div className={style.userInfo}>
                                <span className={style.name}>Kyutie ko</span>
                                <span>Jan 23, 2023</span>
                            </div>
                        </div>
                        <p>
                            Heaad ahwhafhaahwhafhaahwhafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafhahafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafha
                            hafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafhahafhaahwhafha
                            ahwhafhaahwhafhaahwhafhaahwhafhaahwhafha
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
