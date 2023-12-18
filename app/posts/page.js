import React from 'react';

import { getPosts } from '@/services';
import { DisplayCategories, PostCard } from '@/components';

const AllPosts = async () => {
	const data = await getPosts();

	return (
		<div className='flex flex-col gap-10 p-10'>
            { data.map((post, index) => (
                <PostCard post={post.node} index={index} />
            ))}
            <DisplayCategories />
        </div>
	);
};
export default AllPosts;