import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex'>
        <div className="group">
            <Link href="/" className='text-2xl font-bold'>MyBlog</Link>
            <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-500'></div>
        </div>
    </nav>
  )
}
