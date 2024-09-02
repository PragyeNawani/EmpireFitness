"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { newvisitors } from '@/actions/useractions'
import { useState } from 'react'
import { useEffect } from 'react'
import { newmemberships } from '@/actions/useractions'
const page = () => {
    const {data: session} = useSession()
    
    const router = useRouter()
    if (session) {
        if (session.user.email !== "coderpragye@gmail.com"){
            router.push("/")
        }
    }
    else{
        router.push("/login")
    }
    const [visit, setVisit] = useState([])
    const [member, setmember] = useState([])
    const visitors = async ()=>{
        let newvisi = await newvisitors()
        setVisit(newvisi)
     }
     const members = async ()=>{
        let newmember = await newmemberships()
        setmember(newmember)
     }
     useEffect(() => {
        visitors()
        members()
      }, [])
  return (
    <>
      <section className='h-[100vh] w-full gymbgu flex items-center'>
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg pl-10 h-2/3">
    <table className="w-full text-sm text-left rtl:text-right text-orange-100 dark:text-gray-400 border-2">
        <thead className="text-xl text-orange-300 uppercase bg-gray-950 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Subscription
                </th>
                <th scope="col" className="px-6 py-3">
                    Gmail
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            {member.length == 0 && <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"><td colSpan="3" className="px-6 py-4 text-center text-xl hover:text-gray-900">No Clients Yet</td></tr>}
            {member.map((v, i)=>{
                return <tr className="bg-gray-950 border-b  hover:bg-gray-50 hover:text-gray-900">
                <th scope="row" className="px-6 py-4 font-medium text-lg whitespace-nowrap  dark:text-white">
                    {v.name}
                </th>
                <td className="px-6 py-4">
                    {v.subscription}
                </td>
                <td className="px-6 py-4">
                    {v.email}
                </td>
                <td className="px-6 py-4">
                    {`${v.createdAt}`.slice(0, 16)}
                </td>
            </tr>
            })}
        </tbody>
    </table>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg pl-10 h-2/3">
    <table className="w-full text-sm text-left rtl:text-right text-orange-100 dark:text-gray-400 border-2">
        <thead className="text-xl text-orange-300 uppercase bg-gray-950 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Visitor Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Gmail
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            {visit.length == 0 && <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"><td colSpan="3" className="px-6 py-4 text-center text-xl hover:text-gray-900">No Vistors Yet!</td></tr>}
            {visit.map((v, i)=>{
                return <tr className="bg-gray-950 border-b  hover:bg-gray-50 hover:text-gray-900">
                <th scope="row" className="px-6 py-4 font-medium text-lg whitespace-nowrap  dark:text-white">
                    {v.Name}
                </th>
                <td className="px-6 py-4">
                    {v.Phone}
                </td>
                <td className="px-6 py-4">
                    {v.Gmail}
                </td>
                <td className="px-6 py-4">
                    {`${v.Date}`.slice(0, 16)}
                </td>
            </tr>
            })}
        </tbody>
    </table>
</div>
      </section>
    </>
  
  )
}

export default page
