import React from 'react';
import moment from 'moment'

import { getPostDetails } from '@/services';
import Image from 'next/image';
import { AboutAuthor, AuthorCard, Newsletter, SimilarPosts } from '@/components';
import Link from 'next/link';

const PostDetails = async ({params}) => {
	const data = await getPostDetails(params.slug);

	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;
	
		if (obj) {
		  if (obj.bold) {
			modifiedText = (<b key={index}>{text}</b>);
		  }
	
		  if (obj.italic) {
			modifiedText = (<em key={index}>{text}</em>);
		  }
	
		  if (obj.underline) {
			modifiedText = (<u key={index}>{text}</u>);
		  }
		}
	
		switch (type) {
		  case 'heading-three':
			return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
		  case 'paragraph':
			return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
		  case 'heading-four':
			return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
		  case 'image':
			return (
			  <img
				key={index}
				alt={obj.title}
				height={obj.height}
				width={obj.width}
				src={obj.src}
			  />
			);
		  default:
			return modifiedText;
		}
	  };
	
	return (
		<div className='flex flex-col p-5 lg:p-10 gap-5'>
			<section className=' relative w-full'>
				{ /* This will be the functional Dynamic content coming from the CMS for the 'Featured Content' */}
				<section className='relative p-5 md:p-10 flex flex-col justify-center h-full z-10 gap-5 lg:px-96'>
					<article className='flex gap-5'>
						<Image src={data.author.photo.url} height={200} width={200} alt='author photo' className='h-[50px] w-[50px] rounded-full' />
						<div>
							<h4><Link href={`/author/${data.author.slug}`}>{data.author.name}</Link></h4>
							<p>Posted on {moment(data.createdAt).format('MMM DD, YYYY')}</p>
						</div>
					</article>
					<h1>{data.title}</h1>
				</section>
			</section>

			<Image src={data.featuredImage.url} width={1920} height={1080} alt='Featured Image' className='w-full h-[550px] object-cover' />

			{ /* Body Text for the article */ }
			<section className='flex flex-col lg:flex-row gap-10 md:p-10 lg:px-72'>
				<article className='lg:w-3/4 lg:border-r-2 border-gray-400 lg:pr-10'>
					{data.content.raw.children.map((typeObj, index) => {
					const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

					return getContentFragment(index, children, typeObj, typeObj.type);
					})}
				</article>
				
				<article className='lg:w-1/4 flex flex-col gap-10'>
					<AboutAuthor author={data.author} className=''/>

					<SimilarPosts slug={data.slug} categories={data.categories.map((category) => category.slug)} />
				</article>
			</section>

			<Newsletter />
		</div>
	);
};
export default PostDetails;