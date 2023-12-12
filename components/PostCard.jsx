import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => (
	<div className="card w-96 bg-base-100 shadow-xl">
		<figure><img src={post.featuredImage.url} alt={post.title} /></figure>
		<div className="card-body">
			<Link href={`/posts/${post.slug}`}><h2 className="card-title">{post.title}</h2></Link>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div className="card-actions justify-end">
				<button className="btn btn-primary"><Link href={`/posts/${post.slug}`}>Read Now</Link></button>
			</div>
		</div>
	</div>
);

export default PostCard;