import React from 'react'

import { getFeaturedPosts } from '@/services'
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPost = async () => {
    const featuredPost = await getFeaturedPosts();

    /* Setting background image variable */ 
    const postImage = featuredPost[0].featuredImage.url;
    
    return (
        <div id='featuredBody' className=' relative lg:h-96 w-full'>
            <Image src={`${postImage}`} height={300} width={300} className='absolute z-0 w-full h-full object-cover brightness-50' />

            { /* This will be the functional Dynamic content coming from the CMS for the 'Featured Content' */}
            <section className='relative p-5 md:p-10 flex flex-col justify-center h-full z-10 text-white lg:w-2/3 gap-5'>
                <p className='intern-text-p1'>POSTED ON <Link href={`/categories/${featuredPost[0].categories[0].slug}`} className='text-yellow-300 uppercase'>{featuredPost[0].categories[0].name}</Link> | {moment(featuredPost[0].createdAt).format('MMM DD, YYYY')}</p>
                <h1 className='text-yellow-500'><Link href={`/posts/${featuredPost[0].slug}`}>{featuredPost[0].title}</Link></h1>
                <p className='intern-text-p1'>By <a className='text-yellow-300' href={`/author/${featuredPost[0].author.slug}`}>{featuredPost[0].author.name}</a></p>
                <p className='intern-text-p3'>{featuredPost[0].excerpt}</p>
            </section>
        </div>
    )
}

export default FeaturedPost