import React from 'react';

import { getCategoriesDetails } from '@/services';
import { PostCard } from '@/components';

const PagesDetails = async ({params}) => {
	const data = await getCategoriesDetails(params.slug);

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
export default PagesDetails;