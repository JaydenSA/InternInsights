import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
	return (
	<div className="card w-96 bg-base-100 shadow-xl">
		<figure><img src={post.featuredImage.url} alt={post.title} /></figure>
		<div className="card-body gap-5">
			<p className='intern-text-p3 '>By <Link className='text-yellow-500' href={`/author/${post.author.slug}`}>{post.author.name}</Link></p>
			<Link href={`/posts/${post.slug}`}><h2 className="card-title line-clamp-1">{post.title}</h2></Link>
			<p className=' line-clamp-3 intern-text-p1'>{post.excerpt}</p>
			<p className='uppercase'>posted on <Link className='intern-text-p3 text-yellow-500' href={`/categories/${post.categories[0].slug}`}>{post.categories[0].name}</Link></p>
			<div className="card-actions justify-end">
				<button className="btn btn-primary"><Link href={`/posts/${post.slug}`}>Read Now</Link></button>
			</div>
		</div>
	</div>
	)
	};

export default PostCard;