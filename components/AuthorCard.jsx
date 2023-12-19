import React from 'react'
import Image from 'next/image'

const AuthorCard = ({author}) => {
  return (
    <div className='flex flex-col gap-5 items-center justify-start text-center p-10 bg-yellow-200 rounded-lg'>
        <Image src={author.photo.url} width={300} height={300} className=' rounded-full w-[150px] h-[150px]'/>
        <h4>{author.name}</h4>
        <p className='text-gray-600'>{author.bio}</p>
    </div>
  )
}

export default AuthorCard