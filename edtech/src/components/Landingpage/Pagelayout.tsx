import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Pagelayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Nav />
    {children}
    <Footer />
    </>
  )
}

export default Pagelayout