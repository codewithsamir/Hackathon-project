import React from 'react'
import Header from './Header'
import Course from './Course'
import Testimonials from './Testimonial'
import Features from './Features'
import Footer from './Footer'
import Pagelayout from './Pagelayout'
const Home = () => {
  return (
 <Pagelayout>
       <Header />  
       <Features /> 
       <Course />
       <Testimonials />
       
 </Pagelayout>
  )
}

export default Home