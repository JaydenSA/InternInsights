import { getPosts } from '@/services'
import { PostCard, FeaturedPost } from '@/components'
import Image from 'next/image'

export default async function Home() {
	const posts = await getPosts();

	return (
		<main className='flex flex-col p-10 gap-10'>
			<FeaturedPost />
			<div className='grid place-items-center grid-cols-4 gap-10'>
				{posts.map((post, index) => (
					<PostCard key={index} post={post.node} />
				))}
			</div>
		</main>
	)
}
