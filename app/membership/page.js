"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { membershipstatus } from '@/actions/useractions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'    

const page = () => {
    const {data: session} = useSession()
    
    const router = useRouter()
    const [stats, setStats] = useState([])
    const { status } = useSession({ required: true, onUnauthenticated() {
        router.push('/login');
      }, })
    useEffect(() => {
        if (status === "loading") {
            console.log(status)
          }
        if(status === "authenticated"){
            getdata()
        }
       }, [session])
    let getdata = async () => {
        let x = await membershipstatus(session.user.email)        
        setStats(x)
      }

        

      
  return (
    <>
    <section className='h-[100vh] w-full gymbgu flex items-center'>
{stats.length == 0 && <div className="w-full max-w-sm bg-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <div className="flex flex-col items-center pb-10 pt-10 px-4">
    <img className="w-24 h-24 mb-3 rounded-full shadow-lg invert-[1]" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Bonnie image"/>
        <h1 className="mb-1 text-5xl font-medium text-gray-300 dark:text-white">No Active Membership!!</h1>
    </div>
</div> }
{stats.map((v,i)=>{
return <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <div className="flex flex-col items-center pb-10 pt-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i1.sndcdn.com/artworks-nYHOnkyhmM1uA5yX-FnyigQ-t500x500.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-200 dark:text-white">Welcome {v.name}</h5>
        <span className="text-lg text-gray-300 dark:text-gray-400">Your {v.subscription} Subscription is active</span>
        
    </div>
</div>
})}

    </section>
    </>
  )
}

export default page
