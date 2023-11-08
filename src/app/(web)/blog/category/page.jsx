import BlogList from '@/components/blogComponents/blogList/BlogList';
import style from './category.module.scss';
import BlogBanner from '@/components/blogComponents/blogBanner/blogBanner';
import CategoryList from '@/components/categoryList/CategoryList';


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
        <div className={style.category}>
            <BlogBanner title='Categories' subHeading={cat} />
            <CategoryList />
            <div className={style.container}>
                <BlogList page={page} cat={cat} />
            </div>
        </div>
    )
}

export default Category
