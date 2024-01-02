'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { useAuthContext } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { PostForm } from "@/components";

function Page() {
    const router = useRouter()
    const { user } = useAuthContext()

    useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

    return (
        <div className="flex flex-col gap-10 p-5 md:p-10">
        
            <section className=' flex flex-col md:flex-row justify-center items-center bg-gray-200 p-5 md:p-10 lg:p-10 lg:px-60 lg:py-20 gap-5 relative'>
				<Image src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' alt="background image for heading"/>

				<article className='flex flex-col gap-5 z-10 text-white'>
					<h2>Submit your article</h2>
				</article>
			</section>
            
            <PostForm />
        </div>
    );
}

export default Page;
