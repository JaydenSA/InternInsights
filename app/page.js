import { getPosts } from '@/services'
import { PostCard } from '@/components'
import Image from 'next/image'

export default async function Home() {
	const posts = await getPosts();

	return (
		<main className='grid grid-cols-3 gap-10 p-10'>
			{posts.map((post, index) => (
				<PostCard key={index} post={post.node} />
			))}
		</main>
	)
}
