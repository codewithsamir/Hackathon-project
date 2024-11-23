
import CoursesPage from '@/components/Landingpage/CoursesPage';
import Features from '@/components/Landingpage/Features';
import Footer from '@/components/Landingpage/Footer'
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

{/* signup page */}


   </div>
  )
}


export default page;