import React from 'react';

import { getPosts } from '@/services';
import { DisplayCategories, PostCard } from '@/components';

export async function generateMetadata({ params }, parent) {      
	return {
	  title: 'Blog Posts',
	  description: 'Check out all the different blog posts we have created by various authors',
	  keywords: 'Techblog, NextJS, ReactJS',
	  author: 'Jayden Oerson',
	  openGraph: {
		title: 'Blog Posts',
		description: 'Check out all the different blog posts we have created by various authors',
		author: 'Jayden Oerson',
		url: 'intern-insights.vercel.app',
		locale: 'en_US',
		type: 'website',
		images: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGJsb2d8ZW58MHx8MHx8fDA%3Ds'],
	  },
	}
  }

const AllPosts = async () => {
	const data = await getPosts();

	return (
		<div className='flex flex-col gap-10 p-5 md:p-10'>
            { data.map((post, index) => (
                <PostCard post={post.node} index={index} />
            ))}
            <DisplayCategories />
        </div>
	);
};
export default AllPosts;