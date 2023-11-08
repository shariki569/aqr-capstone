
import Pagination from '@/components/pagination/Pagination'
import styles from './blog.module.scss'
import Image from 'next/image'

import Link from 'next/link'
import Button from '@/components/button/Button'


const getData = async (page) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}`, { cache: "no-store", })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

const BlogDashboard = async ({ searchParams }) => {

    const page = parseInt(searchParams.page) || 1;

    const { posts, count } = await getData(page);


    const POST_PER_PAGE = 6;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <div className={styles.topHeader}>
                <Link className={styles.link} href='/dashboard/blog/write'>Create Post</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((item) => (
                        <tr key={item.PostId}>
                            <td className={styles.title}><p>{item.PostTitle}</p></td>
                            <td className={styles.center}><Image src={item.PostImg} alt={styles.title} height={70} width={70} /></td>
                            <td><p className={styles.desc} dangerouslySetInnerHTML={{ __html: (item.PostDesc) }} /></td>
                            <td className={styles.date}>{item.CreatedAt.substring(0, 10)}</td>
                            <td className={styles.buttonGroup}>
                                <Button text='View'/>
                                <Button text='delete'/>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    )
}

export default BlogDashboard
