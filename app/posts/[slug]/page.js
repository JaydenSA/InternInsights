import React from 'react';

import { getPosts, getPostDetails } from '@/services';

const PostDetails = async ({params}) => {
	const data = await getPostDetails(params.slug);

	return (
		<>
		<div className="container mx	-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="col-span-1 lg:col-span-8">
				{data.title}
			</div>
			<div className="col-span-1 lg:col-span-4">
				<div className="relative lg:sticky top-8">
				
				</div>
			</div>
			</div>
		</div>
		</>
	);
};
export default PostDetails;