import { DisplayCategories, FeaturedPost, Newsletter, RecentPosts, FeaturedAuthors, GuestWritter } from '@/components'
import EditorsPick from '@/components/EditorsPick';

export default async function Home() {
	return (
		<>
		<main className='flex flex-col gap-10'>
			<FeaturedPost />
			<RecentPosts />
			<DisplayCategories />
			<Newsletter />
			<EditorsPick />
			<FeaturedAuthors />
			<GuestWritter />
		</main>
		</>
	)
}
