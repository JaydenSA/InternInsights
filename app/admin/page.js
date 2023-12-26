'use client'
import React from "react";
import Image from "next/image";
import { useAuthContext } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { getDashboardDetails } from "@/services";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

    const dashboardDetails = getDashboardDetails(user.email);
    console.log(dashboardDetails)

    return (
        <div className="flex flex-col gap-10 p-5 md:p-10">
            { /* 
            <section className=' flex flex-col md:flex-row justify-center items-center bg-gray-200 p-5 md:p-10 lg:p-10 lg:px-60 lg:py-20 mx-auto gap-5 relative'>
				<Image src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={800} width={600} className='absolute z-0 w-full h-full object-cover brightness-50' />

				<Image src={dashboardDetails.photo.url} width={500} height={500} className={'h-[200px] w-[200px] z-10 rounded-full'} alt={'Author Photo'}/>
				<article className='flex flex-col gap-5 z-10 text-white'>
					<h2>Welcome {dashboardDetails.name}</h2>
				</article>
			</section>
            

            <div role="tablist" class="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
            
            */}
        </div>
    );
}

export default Page;
