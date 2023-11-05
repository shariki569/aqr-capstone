import BlogList from '@/components/blogComponents/blogList/BlogList';
import style from './category.module.scss';
import BlogBanner from '@/components/blogComponents/blogBanner/blogBanner';
import CategoryList from '@/components/categoryList/CategoryList';

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
