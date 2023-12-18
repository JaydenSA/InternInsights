import React from 'react';
import moment from 'moment'

import { getPostDetails } from '@/services';
import Image from 'next/image';
import { Newsletter } from '@/components';

const PostDetails = async ({params}) => {
	const data = await getPostDetails(params.slug);

	return (
		<div className='flex flex-col p-5 lg:p-10 gap-5'>
			<section className='flex flex-col gap-5 w-1/2 mx-auto'>
				<article className='flex items-center gap-2.5'>
					<Image src={data.author.photo.url} width={150} height={150} alt='Author Image' className='w-[50px] h-[50px] rounded-full'/>
					<div className='flex flex-col gap-0'>
						<h5>{data.author.name}</h5>
						<p className=''>Posted on {moment(data.createdAt).format('MMM DD, YYYY')}</p>
					</div>
				</article>
					
				<h2>{data.title}</h2>

				<p className='uppercase text-yellow-600'>{ data.categories.map((category) => (
					category.name
				))}</p>
			</section>

			<Image src={data.featuredImage.url} width={1920} height={1080} alt='Featured Image' className='w-full h-[550px]' />

			{ /* Body Text for the article */ }

			<Newsletter />
		</div>
	);
};
export default PostDetails;