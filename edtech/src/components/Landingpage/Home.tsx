import React from 'react'
import Header from './Header'
import Course from './Bookdata'
import Testimonials from './Testimonial'
import Features from './Features'
import Footer from './Footer'
import Pagelayout from './Pagelayout'
import CoursesPage from './CoursesPage'
const Home = () => {
  return (
 <Pagelayout>
       <Header />  
       <Features /> 
       <CoursesPage/>
       <Course />
       <Testimonials />
       
 </Pagelayout>
  )
}

export default Home