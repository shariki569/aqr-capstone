"use client"
import { useSession } from 'next-auth/react';
import Button from '../button/Button'
import TextArea from '../forms/inputs/TextArea'
import style from './comments.module.scss'
import Link from 'next/link';

const Comments = () => {
    const { data: session, status } = useSession();
    return (
        <div className={style.container}>
            <h5 className={style.comment}>Comments</h5>
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
        </div>
    )
}

export default Comments
