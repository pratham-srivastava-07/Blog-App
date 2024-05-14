import React from 'react'
import Link from 'next/link'
import LoginForm from './LoginForm';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
        <div className="group">
            <Link href="/" className='text-2xl font-bold'>MyBlog</Link>
            <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-500'></div>
        </div>
       <LoginForm/>
    </nav>
  )
}
