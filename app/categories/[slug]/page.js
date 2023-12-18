import React from 'react';

import { getCategories, getCategoriesDetails } from '@/services';
import { PostCard } from '@/components';
import CategoriesCard from '@/components/CategoriesCard';

const CategoriesDetails = async ({params}) => {
	const data = await getCategoriesDetails(params.slug);
	const categories = await getCategories();

	return (
		<div className='flex flex-col gap-10 lg:p-10'>
			<section className='bg-gray-400 p-20 text-center grid gap-5'>
            	<h1>{data.name}</h1>
				<p>{data.description}</p>
			</section>

            <section className='flex flex-col lg:flex-row gap-10 px-10'>
				<article className='flex flex-col gap-10 lg:w-2/3'>
					{data.posts.map((post, index) => (
						<PostCard key={index} post={post} />
					))}
				</article>
				<article className='flex flex-col gap-10 lg:w-1/3'>
					{ categories.map((categorie, index) => (
						<CategoriesCard category={categorie} index={index}/>
					) )}
				</article>
            </section>
        </div>
	);
};
export default CategoriesDetails;