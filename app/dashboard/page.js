"use client"
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { fetchuserdata } from '@/actions/useractions'
import { updatedashboard } from '@/actions/useractions'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
const page = () => {
    const {data: session} = useSession()
    const [dashboard, setdashboard] = useState({})
    const router = useRouter()
    useEffect(()=>{
      
        if (!session) {
           router.push('/login')
        }
        else {
           getData()
        }
      },[router, session])
    // console.log(`${session.user.email}`) Not working 
    const getData = async ()=>{
      let u = await fetchuserdata(session.user.email)
      setdashboard(u)
    }
    const updateuserinfo = async (e) => { 
        await updatedashboard(e, session.user.email)
        toast(`Profile updated`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
     }
    const handlechange = (e)=>{
      setdashboard({...dashboard, [e.target.name]: e.target.value})
      
    }
    const [htmdoc, sethtmdoc] = useState("opacity-1")
    // setTimeout(() => {
    //   sethtmdoc("opacity-1")
    // }, 200);
    
  return (
    <section className={`gymbgu h-[100vh] w-full flex items-center ${htmdoc} `}>
       <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"

            />
        <div className='mx-auto w-1/2 cardshadow2ad h-fit flex flex-col gap-10'>
            <h1 className='text-center text-4xl text-orange-400 pt-7'>Welcome {dashboard.email} </h1>
            <form action={updateuserinfo} className='text-black flex flex-col gap-5'>
              <div className='flex flex-col gap-2 w-1/2 mx-auto'>
                <label htmlFor="Name" className='text-lg text-orange-300'>Name</label>
                <input onChange={handlechange} value={dashboard.name?dashboard.name:""} type="text" name="name" className='text-lg px-3 py-1 rounded-lg outline-none border-none' />
              </div>
              <div className='flex flex-col gap-2 w-1/2 mx-auto'>
                <label htmlFor="Gender" className='text-lg text-orange-300'>Gender</label>
                <input onChange={handlechange} value={dashboard.gender?dashboard.gender:""} type="text" name="gender" className='text-lg px-3 py-1 rounded-lg outline-none border-none' />
              </div>
              <div className='flex flex-col gap-2 w-1/2 mx-auto'>
                <label htmlFor="Age" className='text-lg text-orange-300'>Age</label>
                <input onChange={handlechange} value={dashboard.age?dashboard.age:""} type="text" name="age" className='text-lg px-3 py-1 rounded-lg outline-none border-none' />
              </div>
              <div className='flex flex-col gap-2 w-1/2 mx-auto'>
                <label htmlFor="email" className='text-lg text-orange-300'>Email</label>
                <input value={`${dashboard.email}`} readOnly type="text" name="email"  className='text-lg px-3 py-1 rounded-lg outline-none border-none'/>
              </div>
              <div className='flex justify-center pb-5 w-1/2 mx-auto'>
                <button className='px-5 py-3 text-sm text-orange-300 bg-orange-900 hover:text-orange-900 hover:bg-orange-300 rounded-xl'>Update</button>
              </div>
            </form>
        </div>
    </section>
  )
}

export default page
