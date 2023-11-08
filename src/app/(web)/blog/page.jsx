
import styles from './blog.module.scss'

// import TwoSection from '@/components/section/twoSection/TwoSection'
import BlogBanner from '@/components/blogComponents/blogBanner/blogBanner'
import BlogList from '@/components/blogComponents/blogList/BlogList'
import CategoryList from '@/components/categoryList/CategoryList'
import BlogSideBar from '@/components/blogComponents/blogSideBar/BlogSideBar'

export const metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title: "Explore Our Blog: Insights and Stories from Aqua Cainta Resort",
  description: "Dive into our blog to discover fascinating stories, insightful articles, and thought-provoking discussions. Stay updated with Aqua Cainta Resort.",
  openGraph: {
    title: "Explore Our Blog: Insights and Stories from Aqua Cainta Resort",
    description: "Dive into our blog to discover fascinating stories, insightful articles, and thought-provoking discussions. Stay updated with Aqua Cainta Resort.",
  },
  twitter: {
    title: "Explore Our Blog: Insights and Stories from Aqua Cainta Resort",
    description: "Dive into our blog to discover fascinating stories, insightful articles, and thought-provoking discussions. Stay updated with Aqua Cainta Resort.",
  }
}



export default function Blog ({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.blog}>
      <BlogBanner title='Our Blog' subHeading='Discover the latest news and insights'/>
      <CategoryList />
      <div className={styles.container}>
        <BlogList page={page} />
        <BlogSideBar/>
      </div>
    </div>
  );
}


