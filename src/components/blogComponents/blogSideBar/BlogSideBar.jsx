import style from './blog.module.scss'

const BlogSideBar = () => {
    return (
        <div className={style.sidebar}>
            <p>What's New?</p>
            <h5>Most Popular</h5>
            <div className={style.posts}>
                <div className={style.categoryBadge}>
                    <p>Category</p>
                </div>
                <div className={style.sideTitle}>
                    <h4>Title Has its flaws but nothing</h4>
                </div>
                <div className={style.sideAuthor}>
                    <span className={style.sideName}>
                        <strong>Kyut ko</strong>
                    </span>
                    <span className={style.sideDate}>
                        June 20,
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogSideBar
