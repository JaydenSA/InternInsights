import React from 'react';
import Image from 'next/image';

import { getAuthorDetails, getAuthor } from '@/services';
import { PostCard, AuthorCard, } from '@/components';

const AuthorDetails = async ({params}) => {
	const data = await getAuthorDetails(params.slug);
    const authorFeatured = await getAuthor();

	return (
		<div className='flex flex-col gap-10 p-5 md:p-10'>
			<section className=' flex flex-col md:flex-row justify-center items-center bg-gray-200 p-5 md:p-10 lg:p-10 lg:px-60 lg:py-20 mx-auto gap-5 relative'>
				<Image src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

				<Image src={data.photo.url} width={500} height={500} className={'h-[200px] w-[200px] z-10 rounded-full'} alt={'Author Photo'}/>
				<article className='flex flex-col gap-5 z-10 text-white'>
					<h2>Hey there, I'm {data.name} and welcome to my page!</h2>
					<p>{data.bio}</p>
				</article>
			</section>

			<section className='flex flex-col lg:flex-row gap-10 md:px-10'>
				<article className='flex flex-col gap-10 lg:w-2/3'>
					{data.posts.map((post, index) => (
						<PostCard key={index} post={post}/>
					))}
				</article>
				
				<article className='flex flex-col md:grid grid-cols-2 lg:flex gap-10 lg:w-1/3'>
					{ authorFeatured.map((author, index) => (
						<AuthorCard author={author} index={index}/>
					)) }
				</article>
			</section>
        </div>
	);
};

export default AuthorDetails;