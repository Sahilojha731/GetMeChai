"use client"
import React from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 flex justify-around items-center p-3 cursor-pointer'>
      <div className="logo">
        <h1 className='text-white p-4 text-2xl font-bold'>Get Me Chai</h1>
      </div>
      {/* <ul className='flex space-x-6 p-4 justify-between'>
        <li className='text-white'>Home</li>
        <li className='text-white'>About</li>
        <li className='text-white'>Services</li>
        <li className='text-white'>Contact</li>
      </ul> */}
      <div className="buttons flex">
        <Link href="/login"><button className='bg-blue-700 hover:bg-blue-800 text-white px-2 py-1 rounded-md mx-2 cursor-pointer'>Login</button></Link>
        <Link href='/signup'><button className='bg-blue-700 hover:bg-blue-800 text-white px-2 py-1 rounded-md mx-2 cursor-pointer'>Sign Up</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
