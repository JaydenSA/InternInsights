'use client'
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import { menu, close, bannerLogo } from '@/public/';

const HomeHeader = () => {
	const [toggle, setToggle] = useState(false);
	console.log(menu)

	return (
		<div className="flex flex-col justify-center items-center">

			<div className='flex justify-center items-center uppercase'>
				<Link href={'/'}><Image src={bannerLogo.src} alt='banner logo' className='max-h-[150px] w-auto' height={'300'} width={'500'}/></Link>
			</div>

			<ul className='hidden md:flex justify-center bg-yellow-500 text-white pb-5 lg:pt-5 gap-10 w-full font-bold uppercase'>
				<li className='hover:scale-125 transition-all'><Link href={'/'}>Home</Link></li>
				<li className='hover:scale-125 transition-all'><Link href={'/posts'}>Posts</Link></li>
				<li className='hover:scale-125 transition-all'><Link href={'/about'}>About</Link></li>
				<li className='hover:scale-125 transition-all'><Link href={'/contact'}>Contact Us</Link></li>
			</ul>

			<div className="md:hidden flex flex-1 flex-col justify-center items-center py-3">
				<img
				src={toggle ? close.src : menu.src}
				alt="menu"
				className={`w-[28px] h-[28px] object-contain`}
				onClick={() => setToggle(!toggle)}
				/>

				<div
				className={`${
					!toggle ? "hidden" : "flex"
				} w-full px-10 py-4 bg-black-gradient min-w-[140px] rounded-xl sidebar bg-white z-20 transition-all`}
				>
				<ul className="list-none flex justify-center uppercase items-center flex-1 flex-col gap-5 bg-yellow-500 text-white">
					<li><Link href={'/'}>Home</Link></li>
					<li><Link href={'/posts'}>Posts</Link></li>
					<li><Link href={'/about'}>About</Link></li>
					<li><Link href={'/contact'}>Contact Us</Link></li>
				</ul>
				</div>
			</div>
		</div>
	)
}

export default HomeHeader