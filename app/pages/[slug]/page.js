import React from 'react';
import Image from 'next/image';

import { getPageDetails } from '@/services';
import { Newsletter, PostCard } from '@/components';

const PagesDetails = async ({params}) => {
	const data = await getPageDetails(params.slug);
	console.log(data)

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
		<div className='flex flex-col gap-10 p-5 md:p-10'>
			<article className=' relative p-5 md:p-10 lg:p-20 text-center text-white grid gap-5'>
				<Image src={'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

            	<h1 className='z-10'>{data.title}</h1>
				<p className='z-10'>{data.pageInformation}</p>
			</article>

			<article className='md:p-10 lg:px-72'>
				{data.content.raw.children.map((typeObj, index) => {
				const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

				return getContentFragment(index, children, typeObj, typeObj.type);
				})}
			</article>

			<Newsletter />
        </div>
	);
};
export default PagesDetails;