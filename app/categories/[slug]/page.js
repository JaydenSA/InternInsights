import React from 'react';
import Image from 'next/image';

import { getCategories, getCategoriesDetails } from '@/services';
import { PostCard } from '@/components';
import CategoriesCard from '@/components/CategoriesCard';

export async function generateMetadata({ params }, parent) {   
	// fetch data
	const data = await getCategoriesDetails(params.slug);
   
	return {
	  title: data.name,
	  description: data.description,
	  keywords: "personal-development, software-development, career-growth, web-development",
	  author: "Jayden Oerson",
	  openGraph: {
		title: data.name,
		description: data.description,
		author: "Jayden Oerson",
		url: 'intern-insights.vercel.app',
		locale: 'en_US',
		type: 'website',
		images: ['https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
	  },
	}
  }

const CategoriesDetails = async ({params}) => {
	const data = await getCategoriesDetails(params.slug);
	const categories = await getCategories();

	return (
		<>
		<div className='flex flex-col gap-10 p-5 md:p-10'>

			<section className=' relative p-5 md:p-10 lg:p-20 text-center text-white grid gap-5'>
				<Image src={'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

            	<h1 className='z-10'>{data.name}</h1>
				<p className='z-10'>{data.description}</p>
			</section>

            <section className='flex flex-col lg:flex-row gap-10 md:px-10'>
				<article className='flex flex-col gap-10 lg:w-2/3'>
					{data.posts.map((post, index) => (
						<PostCard key={index} post={post}/>
					))}
				</article>
				<article className='flex flex-col md:grid grid-cols-2 gap-10 lg:flex lg:w-1/3 pb-10'>
					{ categories.map((categorie, index) => (
						<CategoriesCard category={categorie} index={index}/>
					) )}
				</article>
            </section>
        </div>
		</>
	);
};
export default CategoriesDetails;