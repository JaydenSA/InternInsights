import React from 'react'
import moment from 'moment'
import Link from 'next/link'

import { PostCardSmall } from '@/components'
import { getRecentPosts } from '@/services'

const RecentPosts = async () => {
    const recentPosts = await getRecentPosts();

    return (
        <section className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Recent Posts</h1>
            <div className='flex flex-col lg:flex-row gap-5 px-5 md:px-10 py-5 pb-0'>
                <section className='flex flex-col gap-5 lg:w-2/3 '>
                    <figure><img src={recentPosts[0].featuredImage.url} alt={recentPosts[0].title} className=' h-60 w-full object-cover' /></figure>
                    <p className='intern-text-p3 '>By <Link className='text-yellow-500' href={`/author/${recentPosts[0].author.slug}`}>{recentPosts[0].author.name}</Link> | {moment(recentPosts[0].createdAt).format('MMM DD, YYYY')}</p>
                    <h4 className="line-clamp-1"><Link href={`/posts/${recentPosts[0].slug}`}>{recentPosts[0].title}</Link></h4>
                    <p className=' line-clamp-3 intern-text-p1'>{recentPosts[0].excerpt}</p>
			        <p className='intern-text-p3 uppercase'>posted on <Link className=' text-yellow-500' href={`/categories/${recentPosts[0].categories[0].slug}`}>{recentPosts[0].categories[0].name}</Link></p>
                    <div className="">
                        <Link href={`/posts/${recentPosts[0].slug}`} className="bg-yellow-500 p-4 px-10 rounded-md">Read Now</Link>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-start lg:w-1/3'>
                    <PostCardSmall post={recentPosts[1]}/>
                    <PostCardSmall post={recentPosts[2]}/>
                    <PostCardSmall post={recentPosts[3]}/>
                </section>
            </div>
        </section>
    )
}

export default RecentPosts