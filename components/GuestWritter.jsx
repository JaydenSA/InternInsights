import React from 'react'

import { getBannerDetails } from '@/services'
import Image from 'next/image';

const GuestWritter = async () => {
    const guestWritterBanner = await getBannerDetails('team-recruiting');

    return (
        <div id='featuredBody' className=' relative  w-full'>
            <Image src={guestWritterBanner.featuredImage.url} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

            <section className='relative p-5 py-10 md:p-10 flex flex-col justify-center items-center text-center h-full z-10 text-white gap-5'>
                <article className=''>
                    <h2>{guestWritterBanner.heading}</h2>
                    <p className='w-2/3 mx-auto'>{guestWritterBanner.subheading}</p>
                </article>

                <input type="text" placeholder={guestWritterBanner.placeholderText} class="input input-bordered w-full max-w-xs text-black" />
            </section>
        </div>
    )
}

export default GuestWritter