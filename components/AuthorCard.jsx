import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImGithub } from "react-icons/im";

const AuthorCard = ({author}) => {
  return (
    <div className='flex flex-col gap-2.5 items-center justify-start text-center p-5 lg:p-10 border-2 bg-gray-100 rounded-lg hover:bg-yellow-500 hover:text-white'>
      <Image src={author.photo.url} width={300} height={300} className=' rounded-full w-[150px] h-[150px] object-cover object-center'/>
      <Link href={`/author/${author.slug}`}><h4>{author.name}</h4></Link>
      <p className=' line-clamp-4'>{author.bio}</p>
    </div>
  )
}

export default AuthorCard