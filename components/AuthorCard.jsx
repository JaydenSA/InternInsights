import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AuthorCard = ({author}) => {
  return (
    <div className='flex flex-col gap-5 items-center justify-start text-center p-5 lg:p-10 border-2 border-gray-300 rounded-lg hover:bg-yellow-500 hover:text-white'>
        <Image src={author.photo.url} width={300} height={300} className=' rounded-full w-[100px] h-[100px]'/>
        <Link href={`/author/${author.slug}`}><h4>{author.name}</h4></Link>
        <p className=''>{author.bio}</p>
      </div>
  )
}

export default AuthorCard