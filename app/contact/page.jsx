import Image from 'next/image'
import React from 'react'
import FormSection from '@/components/FormSection'

export async function generateMetadata() {      
	return {
	  title: 'Contact Us',
	  description: 'Reach out! If you have any questions or want to submit your own article, reach out below at contact@intern-insights.co.za',
	  keywords: "NextJS, Techblog, ReactJS",
	  author: 'Jayden Oerson',
	  openGraph: {
		title: 'Contact Us',
		description: 'Reach out! If you have any questions or want to submit your own article, reach out below at contact@intern-insights.co.za',
		author: 'Jayden Oerson',
		url: 'intern-insights.vercel.app/contact',
		locale: 'en_US',
		type: 'website',
		images: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
	  },
	}
  }

const Contact = () => {

    return (
        <>
        <div className='relative flex flex-col p-5 lg:p-10 gap-5'>
            <section className=' flex flex-col md:flex-row justify-center items-center bg-gray-200 p-5 md:p-10 lg:p-10 lg:px-60 lg:py-20 gap-5 relative'>
                <Image src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' alt="background image for heading"/>

                <article className='flex flex-col gap-2 z-10 text-white text-center'>
                    <h5 className='uppercase'>Contact Us</h5>
                    <h2>Let’s Start a Conversation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </article>
            </section>

            <section className='flex flex-col md:flex-row justify-center items-center gap-5 p-10 w-full md:w-3/4 lg:w-2/3 md:mx-auto bg-gray-100 md:px-16 md:py-10'>
                <article className='lg:w-1/2'>
                    <h4 className='pb-3 border-b-2 border-black text-[#448820]'>Working hours</h4>
                    <p className='pt-3'>Monday To Friday</p>
                    <p>9:00 AM to 4:00 PM </p>
                </article>

                <article className='lg:w-1/2'>
                    <h4 className='pb-3 border-b-2 border-black text-[#448820]'>Contact Us</h4>
                    <p className='pt-3'>(+27) 60 383 2642</p>
                    <p>contact@intern-insights.co.za</p>
                </article>
            </section>
            
            <FormSection />
        </div>
        </>
  )
};

export default Contact;