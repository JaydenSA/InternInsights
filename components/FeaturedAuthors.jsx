import React from 'react'
import { getAuthor } from '@/services'
import Image from 'next/image';
import { AuthorCard } from '.';

const FeaturedAuthors = async () => {
    const authorFeatured = await getAuthor();

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Dream Team</h1>
            <div className='flex flex-col gap-10 px-10 py-5 pb-0 lg:grid grid-cols-4'>
                { authorFeatured.map((author, index) => (
                    <AuthorCard author={author} index={index}/>
                )) }
            </div> 
        </div>
    )
}

export default FeaturedAuthors