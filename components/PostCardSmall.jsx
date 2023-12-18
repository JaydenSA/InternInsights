import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCardSmall = ({ post }) => {
  return (
    <div className="w-full lg:w-96 flex flex-col gap-5 border-b-2 border-black p-2 py-6 md:p-6 hover:bg-yellow-200 transition-all">
        <p className='intern-text-p3 '>By <Link className='text-yellow-500' href={`/author/${post.author.slug}`}>{post.author.name}</Link> | {moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <h4 className="line-clamp-2"><Link href={`/posts/${post.slug}`}>{post.title}</Link></h4>
        <p className='intern-text-p3 uppercase'>posted on <Link className='text-yellow-500' href={`/categories/${post.categories[0].slug}`}>{post.categories[0].name}</Link></p>
	</div>
  )
}

export default PostCardSmall