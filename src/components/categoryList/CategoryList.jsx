
import Link from 'next/link'
import style from './categoryList.module.scss'

async function getData() {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: "no-store",
    })
    if (!res.ok) {
        throw new Error('No Categories found')
    }
    return res.json()
}

const CategoryList = async () => {

    const data = await getData();


    return (
        <div className={style.container} >
            <div className={style.items}>
                <div className={style.title}>Categories:</div>
                {data?.map((item) => (
                    <Link className={`${style.item}`} key={item?.CatId} href={`/blog/category?cat=${item.CatSlug}`}>
                        <span className={style.category}>{item?.CatTitle}</span>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default CategoryList
