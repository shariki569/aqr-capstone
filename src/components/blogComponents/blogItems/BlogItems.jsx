import Image from 'next/image'
import style from './blogitems.module.scss'
import Link from 'next/link'
//! import Error from 'next/error' /////<==========NEVER USE THIS IN A SERVER COMPONENT!!

// async function getData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return res.json();
// }
const BlogItems = ({ itemKey, item }) => {
    return (
        <div className={style.item} key={itemKey}>
            <div className={style.image}>
                <Image style={{ objectFit: 'cover' }} src={item.PostImg} width={120} height={120} alt="image" />
            </div>
            <div className={style.content}>
                <span className={style.category}>{item.catSlug}</span>
                <Link href={`/blog/${item.PostSlug}`}>
                    <h3 className={style.title}>{item.PostTitle}</h3>
                </Link>
                <p className={style.author}>{item?.user.name}<span>{item.CreatedAt.substring(0, 10)}</span></p>
                <p className={style.desc} dangerouslySetInnerHTML={{__html: item.PostDesc}}/>
            </div>
        </div>
    )
}

export default BlogItems
