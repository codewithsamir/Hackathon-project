import React from 'react'

import { CiSearch } from "react-icons/ci";

 const Header = () => {
  return (
    <>
    <header className='w-full h-16  bg-black pt-4 pr-6'>
        <div className='w-full h-10 flex justify-between items-center  pt-6 '>
            <div className= 'w-28   ml-32'>
                <img src="/skill 1.png" alt="logo" />
            </div>

            <div className=' w-2/4  flex justify-between items-center'>
            <nav className='text-white text-[20px] font-[20px] flex gap-6'>
                <a href="">Home</a>
                <a href="">Course</a>
                <a href="">blog</a>
                <a href="">Contact us</a>
                <a href="">Contact us</a>
            </nav>
            <div>
                <button className=' w-32 h-8 bg-red-600 rounded-full text-white '>Login/Singup</button>
            </div>
            </div>

        </div>
    </header>

    <section className=' bg-red-700 bg-gradient-to-b from-black to-red-800'>
        <div className='w-full h-96 flex  pl-6 pr-6 pt-14 justify-between'>
            <div className='w-96 h-96  -mt-20'>
                    <img src="/first.png" alt="image" width="300px" />
            

            </div>
            <div className='flex flex-col items-center gap-2 mt-8 mr-16'>
                <h1 className='text-[44px] font-bold text-white'>Empower Your Journey to Excellence </h1>
                <p className='text-3xl text-center text-gray-200'>Learn,Practiceand Achieve with Tools Built for Success.</p>

                <div className=" h-32 w-[600px] flex items-center justify-center">
  <input
    type="text"
    placeholder="Search..."
    className="w-[600px] h-10 p-4 rounded-l bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500" 
  />
  <button className='w-20 bg-red-500 h-10 mr-10 z-10 rounded-r' > <CiSearch size={40}  color='white'/></button>
</div>


            </div>
            <div className='w-52 h-52  mt-32 mr-10'>
                    <img src="/second.png" alt="" />
            </div>


        </div>

    </section>
    </>
  )
}


export default Header;
