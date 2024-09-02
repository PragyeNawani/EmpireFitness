"use client"
import React, { useRef } from 'react'
import connectDB from '@/db/connectDB'
import { useState } from 'react'
import { submitcontact } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
    const ref = useRef()
    const [contactform, setContactform] = useState({ Name: "", Phone: "", Gmail: "" })
    const submitcontactform = async (e) => {
        toast('Contact Details Submitted!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        await submitcontact(contactform)
        setContactform({ ...contactform, Name: "", Phone: "", Gmail: "" })
    }
    const handlechange = (e) => {
        setContactform({ ...contactform, [e.target.name]: e.target.value })
    }
    return (
        <>
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
            <div className='formcon w-full h-[100vh] flex flex-col items-center pt-24 gymbgu gap-10'>
                <div className="formhead h-fit w-1/5 backdrop-blur-sm rounded-xl border-[1px] border-orange-200 cardshadow2">
                    <h1 className='text-3xl text-orange-300 py-4 px-5 text-center'>Contact Us</h1>
                </div>
                <div className='w-full'>
                    <form ref={ref} action={(e) => { submitcontactform(e) }} className='mx-auto w-1/2 flex flex-col gap-5 items-center backdrop-blur-lg rounded-xl cardshadow py-10'>
                        <div className='flex flex-col gap-3 w-2/3'>
                            <label htmlFor="Name" className='text-xl text-orange-200 w-full'>Name</label>
                            <input onChange={handlechange} value={contactform.Name ? contactform.Name : ""} type="text" placeholder='Enter your name' name="Name" id='formcontactname' className='w-full px-3 py-2 outline-none border-0 text-black rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-3 w-2/3'>
                            <label htmlFor="Phone" className='text-xl text-orange-200 w-full'>Phone Number</label>
                            <input onChange={handlechange} value={contactform.Phone} type="text" name="Phone" placeholder='Enter your phone number' id='formcontactphone' className='w-full px-3 py-2 outline-none border-0 text-black rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-3 w-2/3'>
                            <label htmlFor="Gmail" className='text-xl text-orange-200 w-full'>Gmail</label>
                            <input onChange={handlechange} value={contactform.Gmail} type="text" name="Gmail" id='formcontactgmail' className='w-full px-3 py-2 outline-none border-0 text-black rounded-lg' placeholder='Enter your gmail' />
                        </div>
                        <div>
                            <button disabled={contactform.Name?.length < 4 || contactform.Phone?.length > 10 || contactform.Phone?.length < 10 || contactform.Gmail.slice(-10) !== "@gmail.com"} onClick={() => { ref.reset }} className="px-4 py-2 rounded-xl border-[1px] border-orange-400 text-orange-300 bg-orange-950 hover:text-orange-950 hover:bg-orange-300 hover:border-orange-900 disabled:opacity-70 disabled:hover:bg-orange-950 disabled:hover:text-orange-300 disabled:hover:border-orange-400 disabled:cursor-not-allowed">Send</button>

                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default page
