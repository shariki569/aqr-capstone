'use client'
import style from './layout.module.scss';
export default function BlogLayout ({children}) {



    return(
        <div className={style.container}>
            This is a blog post
           {children}
        </div>
    )
        
    
}