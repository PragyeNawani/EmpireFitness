"use client"
import React from 'react'
import Link from 'next/link'
import { NavLink } from 'react-router-dom'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
const navbar = () => {
  const {data: session} = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  return ( 
    
    <nav className='fixed z-10 top-0 left-0 min-h-2 px-5  navbar opacity-0 w-full'>
    <div className='flex justify-between h-16 w-full'>

    <div className='leftside flex items-center gap-10'>
        <div className="rounded-full ">
          <Link href="/">
        <img src="/logo.png" className='w-[50px] h-[50px] border-2 border-orange-200 rounded-full' alt="" />
          </Link>
      </div>
      <ul className='flex gap-10 text-xl'>
        <Link href="/"><li className='navli hover:scale-110 py-1 px-5 rounded-xl text-orange-400'>Home</li></Link>
        <Link href="/memberships"><li className='navli hover:scale-110 py-1 px-5 rounded-xl text-orange-400'>Memberships</li></Link>
        <Link href="/contact"><li className='navli hover:scale-110 py-1 px-5 rounded-xl text-orange-400'>Contact Us</li></Link>
      </ul>
    </div>
    {session && <>
    <div className='absolute right-4 top-3 flex flex-col justify-center items-end w-[200px]'>

<button onClick={()=>{setshowdropdown(!showdropdown)}} onBlur={()=>{setTimeout(() => {
  setshowdropdown(false)
}, 200);}} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="bg-gradient-to-r from-[#ddff44] via-[#ff8f44] to-[#FF675E] hover:bg-blue-800 hover:bg-gradient-to-r hover:from-[#FF675E] hover:via-[#ff8f44] hover:to-[#ddff44] font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-orange-950 text-md w-fit" type="button">Welcome<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
<div id="dropdownInformation" class={`z-10 ${showdropdown?"":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Welcome</div>
      <div className="font-medium truncate">{session.user.email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="/membership" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Membership Status</Link>
      </li>
      {session.user.email == "coderpragye@gmail.com" && <>
      <li>
        <Link href="/visitors" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Clients & Visitors</Link>
      </li>
      </>
      }
    </ul>
    <div class="py-2">
      <Link href="#" onClick={() => { signOut() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
    </div>
</div>
    </div>

    </>}
    {!session && <>
      <div className="relative inline-flex group rightside h-10 top-4">
        <div
            className="absolute transitiona-all duration-500 opacity-70 -inset-[-3px] bg-gradient-to-r from-[#ddff44] via-[#ff4444] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-[0px] group-hover:duration-200 animate-tilt">
        </div>
        <Link href="/login"
            className="relative inline-flex items-center justify-center px-10 font-bold min-h-8 transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-gray-900 text-sm text-orange-300"
            role="button">Login
        </Link>
    </div>
    </>}  
    </div>
    </nav>
  )
}

export default navbar

