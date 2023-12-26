import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';

const SimilarPosts = async ({ categories, slug }) => {
    const similarPosts = await getSimilarPosts(categories, slug);

    return (
        <div className="">
            <h3 className="mb-4 pb-4 border-b uppercase">Related Posts</h3>
            {similarPosts.map((post, index) => (
                <div className="pb-4">
                    <p className="intern-text-p1">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                    <h5><Link href={`/posts/${post.slug}`} className="" key={index}>{post.title}</Link></h5>
                </div>
            ))}
        </div>
    )
}

export default SimilarPosts