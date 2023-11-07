import BlogList from '@/components/blogComponents/blogList/BlogList';
import style from './category.module.scss';
import BlogBanner from '@/components/blogComponents/blogBanner/blogBanner';
import CategoryList from '@/components/categoryList/CategoryList';

// export async function generateMetadata({ params }) {

//     async function getData(cat) {
//         const res = await fetch(`http://localhost:3000/api/categories/${cat}`, {
//             cache: "no-store",
//         })
//         if (!res.ok) {
//             throw new Error('No Categories found')
//         }
//         return res.json()
//     }

//     const { cat } = params
//     const data = await getData(cat)

//     return {
//         title: data?.CatTitle,
//         description: `Browse our ${data?.CatTitle} collection. Our selection offers a variety of options. Visit Aqua Cainta Website to learn more.`,
//         alternates: {
//             canonical: `/blog/category?cat=${data?.catSlug}`
//         }
//     }
// }

export async function generateMetadata({ searchParams }) {

    const { cat } = searchParams
    let title = `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`
   

    return {
        title: `${title} Category`,
        description: `Browse our ${cat} collection. Our selection offers a variety of options. Visit aquacaintaresort.com to learn more.`,
        alternates: {
            canonical: `/blog/category?cat=${cat}`
        }
    }
}



const Category = ({ searchParams }) => {

    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;
    return (
        <>
            <BlogBanner title='Categories' subHeading={cat} />
            <CategoryList />
            <div className={style.container}>
                <BlogList page={page} cat={cat} />
            </div>
        </>
    )
}

export default Category
