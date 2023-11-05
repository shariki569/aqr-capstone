
import styles from './blog.module.scss'
// import Banner from '@/components/banner/Banner'
import TwoSection from '@/components/section/twoSection/TwoSection'
import BlogBanner from '@/components/blogComponents/blogBanner/blogBanner'
import BlogList from '@/components/blogComponents/blogList/BlogList'
import CategoryList from '@/components/categoryList/CategoryList'
import BlogSideBar from '@/components/blogComponents/blogSideBar/BlogSideBar'


const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <BlogBanner title='Our Blog' subHeading='Discover the latest news and insights'/>
      <CategoryList />
      <div className={styles.container}>
        <BlogList page={page} />
        <BlogSideBar/>
      </div>
    </>
  )
}

export default Blog
