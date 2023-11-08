import React from 'react'
import style from './bloglist.module.scss'
import BlogItems from '../blogItems/BlogItems'
import Pagination from '@/components/pagination/Pagination'

const getData = async (page, cat) => {
    const res = await fetch(`${process.env.APP_URL}/api/posts?page=${page}&cat=${cat || ''}`, { cache: "no-store", })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}


const BlogList = async ({ page, cat }) => {

    const { posts, count } = await getData(page, cat)

    const POST_PER_PAGE = 6;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return (
        <div className={style.container}>
            <div className={style.items}>
                {posts?.map((item) => (
                    <BlogItems key={item.PostId} item={item} />
                ))}
            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    )
}

export default BlogList
