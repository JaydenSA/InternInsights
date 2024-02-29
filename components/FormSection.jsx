'use client'

import React from 'react'
import { useState } from 'react';

const FormSection = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const handlePostSubmission = async () => {
        setShowSuccessMessage(false);
        const postObject = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            query: document.getElementById('query').value,
            message: document.getElementById('message').value,
        };

        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);
    };
    return (
        <section className='flex flex-col justify-center items-center gap-5 w-full md:w-3/4 lg:w-2/3 md:mx-auto'>
            <input type="text" className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Full Name" name="name" id="name"/>

            <input type="email" className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Your Email" name="email" id="email"/>

            <input type="text" className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Query Related" name="query" id="query"/>

            <textarea className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="message" placeholder="Message" id="message"/>

            <div className="mx-auto flex flex-col gap-5 w-full">
                <button type="button" onClick={handlePostSubmission} className="btn w-full bg-[#FFD050] hover:bg-[#EDC14A]" id="submit">Submit Post</button>
                {showSuccessMessage && <span className="text-xl text-center font-semibold mt-3 text-green-500">Your query has been sent!</span>}
            </div>
        </section>
    )
}

export default FormSection;