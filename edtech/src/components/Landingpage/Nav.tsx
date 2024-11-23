import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <header className='w-full h-16 bg-black  px-6 py-6 '>
        <div className='w-full h-10 flex justify-between items-center pb-6'>
          <div className=' ml-4 sm:ml-8 lg:ml-32'>
            <img src="/skill1.png" alt="logo" />
          </div>

          <div className=' flex    gap-4 items-center '>
            <nav className='text-white  font-medium flex  gap-4 px-4'>
              <Link href="/" className='hover:text-red-500 text-lg'>Home</Link>
              <Link href="#" className='hover:text-red-500 text-lg'>Course</Link>
              <Link href="#" className='hover:text-red-500 text-lg'>Loksewa exam test</Link>
              <Link href="#" className='hover:text-red-500 text-lg'>Drivingliscence exam test</Link>
              <Link href="/contact" className='hover:text-red-500 text-lg'>Contact Us</Link>
            </nav>
            <div className='mt-2 md:mt-0'>
            <Link href="/login" className='w-28 h-8 bg-red-600 rounded-full text-white text-sm md:w-32 md:h-10'>
            <button className='w-28 h-8 bg-red-600 rounded-full text-white text-sm md:w-32 md:h-10'>
                Login/Signup
              </button>
            </Link>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Nav