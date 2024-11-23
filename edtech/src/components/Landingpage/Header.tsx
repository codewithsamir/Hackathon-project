import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className='w-full h-16 bg-black pt-4 px-6'>
        <div className='w-full h-10 flex justify-between items-center'>
          <div className='w-28 ml-4 sm:ml-8 lg:ml-32'>
            <img src="/skill 1.png" alt="logo" />
          </div>

          <div className='w-full md:w-2/4 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center'>
            <nav className='text-white text-[16px] sm:text-[18px] md:text-[20px] font-medium flex flex-wrap gap-4 sm:gap-6'>
              <a href="#">Home</a>
              <a href="#">Course</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </nav>
            <div className='mt-2 md:mt-0'>
              <button className='w-28 h-8 bg-red-600 rounded-full text-white text-sm md:w-32 md:h-10'>
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className='bg-gradient-to-b from-black to-red-800'>
        <div className='w-full h-auto lg:h-96 flex flex-wrap lg:flex-nowrap pl-6 pr-6 pt-8 lg:pt-14 justify-between items-center'>
          <div className='w-full lg:w-96 h-auto -mt-10 lg:-mt-20 flex justify-center'>
            <img src="/first.png" alt="image"  className="max-w-full lg:w-80" />
          </div>
          <div className='flex flex-col items-center gap-4 mt-4 lg:mt-8 lg:mr-16'>
            <h1 className='text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white text-center'>
              Empower Your Journey to Excellence
            </h1>
            <p className='text-lg sm:text-2xl lg:text-3xl text-center text-gray-200'>
              Learn, Practice, and Achieve with Tools Built for Success.
            </p>

            <div className="h-auto w-full lg:w-[600px] flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full lg:w-[600px] h-10 p-4 rounded-l bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
              <button className='w-14 lg:w-20 bg-red-500 h-10 mr-4 lg:mr-10 z-10 rounded-r flex items-center justify-center'>
                <CiSearch size={24} lg-size={40} color='white' />
              </button>
            </div>
          </div>
          <div className='w-40 lg:w-52 h-auto mt-6 lg:mt-32 mr-4 lg:mr-10  flex justify-center '>
            <img src="/second.png" alt="book" className="max-w-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;
