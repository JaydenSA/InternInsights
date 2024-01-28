'use client'
import Link from 'next/link'
import React from 'react'

const HomeHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5 gap-5">

        <div className='border-b-2 border-gray-300 w-full text-center'>
		    <h1 className='pb-4 intern-title'>Intern Insights</h1>
        </div>

        <ul className='flex justify-center pb-4 gap-5 uppercase w-full '>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/posts'}>Posts</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default HomeHeader