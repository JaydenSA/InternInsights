import React from 'react'

import { getFeaturedPosts } from '@/services'
import Image from 'next/image';

const About = async () => {
    const imageURL = 'https://images.unsplash.com/photo-1702234844718-5f4f77a93baa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div id='about' className=' relative  w-full'>
            <Image src={imageURL} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

            { /* This will be the functional Dynamic content coming from the CMS for the 'Featured Content' */}
            <section className='relative p-10 flex flex-col justify-center h-full z-10 text-white lg:w-2/3 gap-5'>
                <article className=''>
                    <h2>What to find out more about what we do?</h2>
                    <p>Subscribe to our weekly newsletter to find out about offers, new articles and more.</p>
                </article>

                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" />
            </section>
        </div>
    )
}

export default About