import { FeaturedAuthors, GuestWritter } from '@/components'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

export async function generateMetadata({ params }, parent) {         
	return {
	  title: 'About',
	  description: 'Learn about what we are doing and what made us who we are',
	  author: 'Jayden Oerson',
	  openGraph: {
		title: 'About',
		description: 'Learn about what we are doing and what made us who we are',
		author: 'Jayden Oerson',
		url: 'intern-insights.vercel.app',
		locale: 'en_US',
		type: 'website',
		images: ['https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
	  },
	}
  }

const page = () => {
  return (
	<>
    <div className='relative flex flex-col p-5 lg:p-10 gap-5'>
        <section className='relative md:p-10 flex flex-col lg:flex-row justify-center h-full z-10 gap-5 lg:px-52'>
            <article className='flex flex-col gap-5 bg-[#FFD050] p-5 lg:p-10 lg:w-1/2'>
				<h6 className='uppercase'>Our Story</h6>
                <h2>We are a team of content writers who share their learnings</h2>
            </article>
            <article className='flex gap-5 lg:w-1/2 justify-center items-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat, eligendi sit maiores ea assumenda optio deserunt nostrum est temporibus mollitia illum ducimus enim adipisci dolores explicabo dolore. Minima, omnis!</p>
            </article>
        </section>

		<section className='flex flex-col'>
			<Image src={'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={800} className='w-full h-96 object-cover' />
			<article className='p-5 lg:p-20 bg-gray-200 flex gap-10 flex-col lg:flex-row'>
				<div className='flex flex-col gap-5'>
					<h6 className='uppercase'>Our mision</h6>
					<h3>Creating valuable content for creatives all around the world</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
				</div>
				<div className='flex flex-col gap-5'>
					<h6 className='uppercase'>Our Vision</h6>
					<h3>A platform that empowers individuals to improve</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
				</div>
			</article>
		</section>

		<section className='relative md:p-10 flex flex-col lg:flex-row justify-center h-full z-10 gap-5 lg:p-15'>
            <article className='flex flex-col gap-5 p-5 lg:p-10 lg:w-1/2'>
                <h4>Our team of creatives</h4>
				<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </article>
            <article className='flex gap-5 lg:w-1/2 justify-center items-center'>
				<Image src={'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-96 object-cover' height={500} width={500} />
            </article>
        </section>

		<section className='relative md:p-10 flex flex-col-reverse lg:flex-row justify-center h-full z-10 gap-5 lg:p-15'>
			<article className='flex gap-5 lg:w-1/2 justify-center items-center'>
				<Image src={'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-96 object-cover' height={500} width={500} />
            </article>
            <article className='flex flex-col gap-5 p-5 lg:p-10 lg:w-1/2'>
                <h4>Our team of creatives</h4>
				<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </article>
        </section>

		<section className='flex flex-col gap-10'>
			<FeaturedAuthors />
			<GuestWritter />
        </section>

    </div>
	</>
  )
}

export default page