"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link'

const Login = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div className="text-white flex flex-col items-center justify-center min-h-[60vh] px-4">
                <div className="bg-slate-900/80 border border-slate-700 p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-md w-full">
                    {session.user?.image ? (
                        <img 
                            src={session.user.image} 
                            alt={session.user.name || "User Avatar"} 
                            className="w-20 h-20 rounded-full border-2 border-blue-500 mb-4 shadow"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center text-2xl font-bold mb-4 shadow">
                            {session.user?.name?.[0] || session.user?.email?.[0] || "U"}
                        </div>
                    )}
                    <h2 className="text-2xl font-bold mb-1">{session.user?.name || "Welcome Back!"}</h2>
                    <p className="text-gray-400 text-sm mb-6">{session.user?.email}</p>
                    
                    <div className="flex flex-col gap-3 w-full">
                        <Link href="/" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition cursor-pointer">
                            Go to Homepage
                        </Link>
                        <button 
                            onClick={() => signOut({ callbackUrl: '/login' })}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-medium transition cursor-pointer"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='text-white flex flex-col items-center py-10 px-4'>
            <h1 className='text-3xl font-bold m-4'>Login to Get Me Chai</h1>
            <p className='text-sm text-gray-300 mb-4'>Enter your credentials or sign in with social providers</p>
            
            <div className='flex flex-col items-center w-full max-w-sm'>
                <input type="text" placeholder='Username' className='p-2.5 my-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <input type="password" placeholder='Password' className='p-2.5 my-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-md cursor-pointer mt-4 w-full font-medium transition'>Login</button>
            </div>

            <div className="relative my-6 w-full max-w-sm flex items-center justify-center">
                <div className="border-t border-gray-600 w-full"></div>
                <span className="bg-[#000] px-3 text-xs text-gray-400 absolute">OR</span>
            </div>

            <div className="social-login-btns flex flex-col gap-3 w-full max-w-sm">
                <button 
                    type="button" 
                    onClick={() => signIn('github')}
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center cursor-pointer transition"
                >
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                    Sign in with GitHub
                </button>
                <button 
                    type="button" 
                    onClick={() => signIn('google')}
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center cursor-pointer transition"
                >
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76 5.342 5.342 0 0 0 4.29-1.97 4.9 4.9 0 0 0 1.04-2.825H9.088v-2.942h9.444a10.975 10.975 0 0 1 .15 2.451 9.4 9.4 0 0 1-2.96 6.88 9.3 9.3 0 0 1-6.88 2.331z" clipRule="evenodd"/>
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login

