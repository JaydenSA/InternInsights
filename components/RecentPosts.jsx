import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { PostCardSmall } from '@/components'
import { getRecentPosts } from '@/services'

const RecentPosts = async () => {
    const recentPosts = await getRecentPosts();

    return (
        <section className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Recent Posts</h1>
            <div className='flex flex-col lg:flex-row gap-5 px-5 md:px-10 py-5 pb-0 lg:px-40'>
                <section className='flex flex-col gap-5 lg:w-2/3 '>
                    <figure><Image src={recentPosts[0].featuredImage.url} alt={recentPosts[0].title} className=' h-60 w-full object-cover' height={300} width={300} /></figure>
                    <p className='intern-text-p3 '>By <Link className='text-[#448820]' href={`/author/${recentPosts[0].author.slug}`}>{recentPosts[0].author.name}</Link> | {moment(recentPosts[0].createdAt).format('MMM DD, YYYY')}</p>
                    <h4 className="line-clamp-1"><Link href={`/posts/${recentPosts[0].slug}`}>{recentPosts[0].title}</Link></h4>
                    <p className=' line-clamp-3 intern-text-p1'>{recentPosts[0].excerpt}</p>
			        <p className='intern-text-p3 uppercase'>posted on <Link className=' text-[#448820]' href={`/categories/${recentPosts[0].categories[0].slug}`}>{recentPosts[0].categories[0].name}</Link></p>
                    <div className="mt-5">
                        <Link href={`/posts/${recentPosts[0].slug}`} className="bg-[#448820] p-4 px-10 rounded-md text-white">Read Now</Link>
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