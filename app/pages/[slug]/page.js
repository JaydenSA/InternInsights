import React from 'react';
import Image from 'next/image';

import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";

import { getPageDetails } from '@/services';
import { Newsletter } from '@/components';

const PagesDetails = async ({params}) => {
	const data = await getPageDetails(params.slug);

	return (
	<>
		<Head>
			<title>{data.title}</title>
			<meta name={data.title} content={data.excerpt} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
      	</Head>
		<div className='flex flex-col gap-10 p-5 md:p-10'>
			<article className=' relative p-5 md:p-10 lg:p-20 text-center text-white grid gap-5'>
				<Image src={'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

            	<h1 className='z-10'>{data.title}</h1>
				<p className='z-10'>{data.pageInformation}</p>
			</article>

			<article className='md:p-10 lg:px-72'>
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

			<Newsletter />
        </div>
</>
	);
};
export default PagesDetails;