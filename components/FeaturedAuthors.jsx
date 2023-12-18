import React from 'react'
import { getAuthor } from '@/services'
import Image from 'next/image';

const FeaturedAuthors = async () => {
    const authorFeatured = await getAuthor();

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Dream Team</h1>
            <div className='flex flex-col gap-10 px-10 py-5 pb-0 lg:grid grid-cols-4'>
                { authorFeatured.map((author, index) => (
                    <div className='flex flex-col gap-5 items-center justify-start text-center p-10 bg-gray-200 rounded-lg'>
                        <Image src={author.photo.url} index={index} width={300} height={300} className=' rounded-full w-[150px] h-[150px]'/>
                        <h4>{author.name}</h4>
                        <p className='text-gray-600'>{author.bio}</p>
                    </div>
                )) }
            </div> 
        </div>
    )
}

export default FeaturedAuthors