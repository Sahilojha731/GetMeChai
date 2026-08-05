"use client"
import {signIn,signOut,useSession} from "next-auth/react"
import GitHubProvider from "next-auth/providers/github";


const login = () => {
    const {data:session} = useSession()

    if(session){
        return <p>
            <div>Signed in as {session.user.email}</div>
            <button onClick={() => signOut()}>Sign Out</button>
        </p>
    }
  return (
    <div className='text-white flex flex-col items-center'>
      <h1 className='text-2xl font-bold m-4'>Login</h1>
      <p className='text-sm'>Enter your credentials</p>
      <div className='flex flex-col items-center'>
        <input type="text" placeholder='Username' className='p-2 m-2 w-96 bg-white text-black border-2 border-gray-400 rounded-md'/>
        <input type="password" placeholder='Password' className='p-2 m-2 w-96 bg-white text-black border-2 border-gray-400 rounded-md'/>
        <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer mt-4'>Login</button>
      </div>
      <div className="social-login-btns flex flex-col gap-2 mt-4">
        <button 
          type="button" 
          onClick={() => signIn('github')}
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 cursor-pointer"
        >
          Sign in with GitHub
        </button>
        <button 
          type="button" 
          onClick={() => signIn('google')}
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default login
