'use client'

import React from "react";
import signIn from "@/src/firebase/auth/signin";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }

    return (
        <div className="py-10 lg:px-96 lg:py-24 flex flex-col justify-center items-center gap-5 bg-[url('https://images.unsplash.com/photo-1682685796002-e05458d61f07?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-black/30 bg-blend-darken lg:h-4/5">

            <h1 className=" text-white">Sign In</h1>

            <form onSubmit={handleForm} className="flex flex-col gap-5">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">What is your name?</span>
                    </div>

                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="john.jones@gmail.com" className="input input-bordered w-full max-w-xs"  />
                </label>

                <label className="form-control w-full max-w-xs" htmlFor="password">
                    <div className="label" >
                        <span className="label-text text-white">What is your name?</span>
                    </div>
                    
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                </label>

                <button type="submit" className="btn mt-5">Sign In</button>
            </form>
            
        </div>
    );
}

export default Page;
