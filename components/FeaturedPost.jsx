import React from 'react'

import { getFeaturedPosts } from '@/services'
import Image from 'next/image';

const FeaturedPost = async () => {
    const featuredPost = await getFeaturedPosts();
    console.log(featuredPost)

    /* Setting background image variable */ 
    const postImage = featuredPost[0].featuredImage.url;

    return (
        <div id='featuredBody' className=' relative h-96 w-full '>
            <Image src={`${postImage}`} height={1920} width={1080} className='absolute z-0 w-full h-full object-cover brightness-50' />

            { /* This will be the functional Dynamic content coming from the CMS for the 'Featured Content' */}
            <section className='p-10 flex flex-col'>
                <h1>{featuredPost[0].title}</h1>
            </section>
        </div>
    )
}

export default FeaturedPost