import React from 'react'
import { getAuthor } from '@/services'
import Image from 'next/image';
import { AuthorCard } from '.';

const FeaturedAuthors = async () => {
    const authorFeatured = await getAuthor();

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Our Authors</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-10 px-5 md:px-10 lg:grid-cols-4'>
                { authorFeatured.map((author, index) => (
                    <AuthorCard author={author} index={index}/>
                )) }
            </div> 
        </div>
    )
}

export default FeaturedAuthors