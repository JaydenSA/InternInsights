import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const AboutAuthor = ({author}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h3 className='uppercase border-b pb-4'>About the Author</h3>
        <div className='grid gap-2.5'>
          <Image src={author.photo.url} height={200} width={200} alt='Author Photo' className='h-[100px] w-[100px] rounded-full' />
          <h4><Link href={`/author/${author.slug}`}>{author.name}</Link></h4>
          <p className='intern-text-p1'>{author.bio}</p>
        </div>
    
    </div>
  )
}

export default AboutAuthor