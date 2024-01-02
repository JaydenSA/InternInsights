import React from 'react'

import { getBannerDetails } from '@/services'
import Image from 'next/image';

const Newsletter = async () => {
    const newsletterBanner = await getBannerDetails('newsletter');

    return (
        <div id='newsletter' className=' relative  w-full'>
            <Image src={newsletterBanner.featuredImage.url} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' alt='Newsletter Banner Image'/>

            { /* This will be the functional Dynamic content coming from the CMS for the 'Featured Content' */}
            <section className='relative p-5 py-10 md:p-10 flex flex-col justify-center items-center h-full z-10 text-white gap-5'>
                <article className=''>
                    <h2>{newsletterBanner.heading}</h2>
                    <p>{newsletterBanner.subheading}</p>
                </article>

                <input type="text" placeholder={newsletterBanner.placeholderText} class="input input-bordered w-full max-w-xs text-black" />
            </section>
        </div>
    )
}

export default Newsletter