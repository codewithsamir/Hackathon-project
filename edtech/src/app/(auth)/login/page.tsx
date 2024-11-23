
import CoursesPage from '@/components/CoursesPage';
import Features from '@/components/Features';
import Footer from '@/components/Footer'
import React from 'react'

 const page = () => {
  return (
   <div>

        {/* Signup page */}
        <Features/>

         {/* Courses page */}
         <CoursesPage/>

    {/* Footer page */}
        <Footer/>


   </div>
  )
}


export default page;