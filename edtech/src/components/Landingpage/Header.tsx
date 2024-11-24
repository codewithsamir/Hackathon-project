'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      

      <section className='bg-gradient-to-b from-black to-red-800 overflow-hidden'>
        <div className='w-full h-auto lg:h-96 flex flex-wrap lg:flex-nowrap pl-6 pr-6 pt-8  justify-between items-center'>
          <div className='w-full lg:w-96 h-auto   flex justify-center'>
            <img src="/first.png" alt="image"  className="max-w-full lg:w-80" />
          </div>
          <div className='flex flex-col items-center gap-4   lg:mr-16'>
            <h1 className='text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white text-center'>
              Empower Your Journey to Excellence
            </h1>
            <p className='text-lg sm:text-2xl lg:text-3xl text-center text-gray-200'>
              Learn, Practice, and Achieve with Tools Built for Success.
            </p>

            <div className="h-auto w-full lg:w-[600px] flex items-center justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
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
