"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className='bg-blue-950 text-white flex justify-between items-center px-4 md:px-12 py-3 shadow-md relative'>
      <div className="logo flex items-center gap-2">
        <Link href="/" className='text-2xl font-bold flex items-center gap-2 hover:opacity-90 transition'>
          <span>☕</span>
          <span>Get Me Chai</span>
        </Link>
      </div>

      <div className="buttons flex items-center gap-3 relative">
        {session ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded-md font-medium transition cursor-pointer text-sm"
            >
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <span className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold">
                  {session.user?.name?.[0] || session.user?.email?.[0] || "U"}
                </span>
              )}
              <span>Welcome {session.user?.name || session.user?.email?.split('@')[0]}</span>
              <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-blue-900 rounded-md shadow-xl py-2 z-50 border border-blue-800"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="px-4 py-2 text-xs text-gray-300 border-b border-blue-800 truncate">
                  {session.user?.email}
                </div>
                <Link
                  href="/login"
                  onClick={() => setShowDropdown(false)}
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-800 transition"
                >
                  Account Info
                </Link>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    signOut({ callbackUrl: '/login' });
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-blue-800 transition cursor-pointer flex items-center gap-2"
                >
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md font-medium transition cursor-pointer text-sm'>
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

