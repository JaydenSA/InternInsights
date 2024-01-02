import { submitPost } from "@/services";
import React from "react";

const PostForm = () => {
    var errorMessage = false
    var successMessage = false

    const handlePostSubmission = async () => {
        const customisedSlug = "Lemon Squares"

        const postObject = {
            title: document.getElementById('title').value,
            excerpt: document.getElementById('excerpt').value,
            featuredImage: document.getElementById('featuredImage').files,
            slug: customisedSlug,
            categories: document.getElementById('categories').value,
            author: document.getElementById('author').value,
            content: document.getElementById('content').value,
        };

        submitPost(postObject)
            .then((res) => {
                if (res.createPost) {
                    successMessage = true
                    errorMessage = false

                    setTimeout(() => {
                        errorMessage = true
                        successMessage = false
                    }, 3000);
                }
            });
    };

    return (
        <section className=' flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 md:mx-auto'>
            <form className='flex flex-col gap-5 w-full md:w-3/4 md:mx-auto'>

                <div className="grid grid-cols-1 gap-4">
                    <input type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Title" name="title" id="title"/>
                    <input type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Author" name="author" id="author"/>
                    <textarea className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="excerpt" placeholder="Excerpt" id="excerpt"/>
                    <textarea className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="content" placeholder="Content" id="content"/>

                    <select className="select w-full bg-gray-100" id="categories" name="categories">
                        <option disabled selected>Pick a category</option>
                        <option value={'pers-dev'}>Personal Development</option>
                        <option value={'software-development'}>Software Development</option>
                        <option value={'career-growth'}>Career Growth</option>
                        <option value={'job-hunting'}>Job Hunting</option>
                    </select>

                    <input type="file" className="file-input w-full bg-gray-100" name="featuredImage" id="featuredImage"/>
                </div>

                {errorMessage && <p className="text-xs text-red-500">All fields are mandatory</p>}
                <div className="mx-auto">
                    <button type="button" onClick={handlePostSubmission} className="btn" id="submit">Submit Post</button>
                    {successMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
                </div>

            </form>
        </section>
    )
}

export default PostForm