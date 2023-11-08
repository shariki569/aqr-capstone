import Banner from '@/components/banner/Banner'
import style from './single.module.scss'
import Image from 'next/image'
import BlogSideBar from '@/components/blogComponents/blogSideBar/BlogSideBar'
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Comments from '@/components/comments/Comments';
import ShareButtons from '@/components/social-media-share/ShareButtons';



const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


export async function generateMetadata({params}) {
  
  const { slug } = params
  const data = await getData(slug)
  return {
    title: data?.PostTitle,
    openGraph: {
      title: data?.PostTitle,
      description: data?.PostDesc,
    },

    alternates: {
      canonical: `/blog/${data?.postSlug}`
    }
  }
}

const BlogPostSingle = async ({ params }) => {
  const { slug } = params
  const data = await getData(slug)

  return (
    <>
      < Banner image="https://resortcainta.netlify.app/upload/1697611859676heeeeee.jpg" size='small' />
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.content}>
            <Image className={style.image} src={data?.PostImg} width={950} height={300} style={{ objectFit: 'cover' }} contain alt="blog" />
            <div className={style.header}>
              <div className={style.title}>
                <h1>{data?.PostTitle}</h1>
                <ShareButtons/>
              </div>
              <div className={style.author}>
                {data.user?.name &&
                  <div className={style.imageProfile}>
                    <Image src={data?.user?.image} width={35} height={35} alt="author" />
                  </div>
                }
                <div>
                  <p>Author: <span className={style.name}> {data?.user.name}</span></p> 
                </div>
                <div>
                  Posted On: <span>{data?.CreatedAt.substring(0, 10)} </span>
                </div>
              </div>
            </div>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: data?.PostDesc }}
            />
          
            <Comments />
          </div>
          <BlogSideBar />
        </div>
      </div>
    </>
  )
}

export default BlogPostSingle
