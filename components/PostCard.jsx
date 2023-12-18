import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
	return (
	<div className="flex flex-col lg:flex-row justify-center items-center gap-10 pb-10 border-b-2 border-black md:pb-0 md:border-none">
		<img src={post.featuredImage.url} alt={post.title} className='h-[200px] w-[350px] md:h-[300px] md:w-[450px]'/>
		<div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
			<p className='intern-text-p3 uppercase'>Posted on <Link className=' text-yellow-500' href={`/categories/${post.categories[0].slug}`}>{post.categories[0].name}</Link></p>
			<h4 className="line-clamp-1"><Link href={`/posts/${post.slug}`}>{post.title}</Link></h4>
			<p className='intern-text-p3 '>By <Link className='text-yellow-500' href={`/author/${post.author.slug}`}>{post.author.name}</Link> | {moment(post.createdAt).format('MMM DD, YYYY')}</p>
			<p className=' line-clamp-5 intern-text-p1'>{post.excerpt}</p>
		</div>
	</div>
	)
	};

export default PostCard;