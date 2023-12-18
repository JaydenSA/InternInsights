import React from 'react';

import { getAuthorDetails } from '@/services';
import { PostCard } from '@/components';

const AuthorDetails = async ({params}) => {
	const data = await getAuthorDetails(params.slug);

	return (
		<div className='flex flex-col gap-10 p-10'>
			<h1>{data.name}</h1>

			<section className='flex flex-col gap-10'>
				{data.posts.map((post, index) => (
					<PostCard key={index} post={post} />
				))}
			</section>
        </div>
	);
};

export default AuthorDetails;