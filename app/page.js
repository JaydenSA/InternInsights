import { DisplayCategories, FeaturedPost, Newsletter, RecentPosts, FeaturedAuthors, GuestWritter } from '@/components'
import EditorsPick from '@/components/EditorsPick';
import Head from 'next/head';

export default async function Home() {
	return (
		<>
		<Head>
			<title>Intern Insights</title>
			<meta name='description' content={'Find all the recent posts and what we are doing!'} />
			<meta property="og:title" content="Intern Insights" key="title" />
			<meta property="og:description" content={'Find all the recent posts and what we are doing!'} />
			<meta name="keywords" content="NextJS, Web-development, ReactJS" />
  			<meta name="author" content="Jayden Oerson" />
		</Head>
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
