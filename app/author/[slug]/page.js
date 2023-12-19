import React from 'react';
import Image from 'next/image';

import { getAuthorDetails, getAuthor } from '@/services';
import { PostCard, AuthorCard } from '@/components';

const AuthorDetails = async ({params}) => {
	const data = await getAuthorDetails(params.slug);
    const authorFeatured = await getAuthor();

	return (
		<div className='flex flex-col gap-10 lg:p-10'>
			<section className=' flex flex-col md:flex-row justify-center items-center bg-gray-200 p-5 md:p-10 lg:p-10 lg:px-60 mx-auto gap-5'>
				<Image src={data.photo.url} width={500} height={500} className={'h-[200px] w-[200px]'} alt={'Author Photo'}/>

				<article className='flex flex-col gap-5'>
					<h2>Hey there, I'm {data.name} and welcome to my page!</h2>
					<p>{data.bio}</p>
				</article>
			</section>

			<section className='flex flex-col md:flex-row gap-10 p-5 md:p-10'>
				<article className='flex flex-col gap-10 md:w-2/3'>
					{data.posts.map((post, index) => (
						<PostCard key={index} post={post} />
					))}
				</article>
				
				<article className='flex flex-col gap-10 md:w-1/3'>
					{ authorFeatured.map((author, index) => (
						<AuthorCard author={author} index={index}/>
					)) }
				</article>
			</section>
        </div>
	);
};

export default AuthorDetails;