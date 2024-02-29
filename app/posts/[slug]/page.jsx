import React from 'react';
import moment from 'moment'

import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";

import { getPostDetails } from '@/services';
import Image from 'next/image';
import { AboutAuthor, Newsletter, SimilarPosts } from '@/components';
import Link from 'next/link';

export async function generateMetadata({ params }, parent) {   
	// fetch data
	const data = await getPostDetails(params.slug);
   
	const url = 'intern-insights.vercel.app/posts/' + params.slug
   
	return {
	  title: data.title,
	  description: data.description,
	  keywords: data.keywords,
	  author: data.author,
	  openGraph: {
		title: data.title,
		description: data.description,
		author: data.author,
		url: url,
		locale: 'en_US',
		type: 'article',
		publishedTime: data.createdAt,
		images: [data.featuredImage.url],
	  },
	}
  }

const PostDetails = async ({params}) => {
	const data = await getPostDetails(params.slug);
	
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
				<article className='lg:w-3/4 lg:border-r-2 border-gray-400 lg:pr-10 flex flex-col gap-2'>
					<RichText
						content={data.content.raw}
						renderers={{
							h1: ({ children }) => <h1 className="mb-5">{children}</h1>,
							h2: ({ children }) => <h2 className="mb-5">{children}</h2>,
							h3: ({ children }) => <h3 className="mb-5">{children}</h3>,
							h4: ({ children }) => <h4 className="mb-5">{children}</h4>,
							h5: ({ children }) => <h5 className="mb-5">{children}</h5>,

							p: ({ children }) => (
								<p className='mb-5'>
									{children}
								</p>
								),

							bold: ({ children }) => <strong>{children}</strong>,
							italic: ({ children }) => <em>{children}</em>,
							underline: ({ children }) => <u>{children}</u>,

							ol: ({ children }) => (
								<ol className=' list-decimal ml-5 mb-5'>
									{children}
								</ol>
							),
							ul: ({ children }) => (
								<ul className=' list-disc ml-5 mb-5'>
									{children}
								</ul>
								),
							li: ({ children }) => (
								<li className='mb-2.5 last-of-type:mb-0'>
									{children}
								</li>
								),

							code_block: ({ children }) => {
								return (
									<pre className="line-numbers language-none">
									<code>{children}</code>
									</pre>
								);
							},

							img: ({ src, altText, height, width }) => (
								<Image
								  src={src}
								  alt={altText}
								  height={height}
								  width={width}
								  objectFit="cover"
								  className='mb-5'
								/>
							  ),

							a: ({ children, openInNewTab, href, rel, ...rest }) => {
								if (href.match(/^https?:\/\/|^\/\//i)) {
									return (
									<a
										href={href}
										target={openInNewTab ? '_blank' : '_self'}
										rel={rel || 'noopener noreferrer'}
										{...rest}
										className='text-[#EDC14A]'
									>
										{children}
									</a>
									);
								}
						
								return (
									<Link to={href} {...rest} className='text-[#EDC14A]'>
										{children}
									</Link>
								);
							},

						}}
					/>
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