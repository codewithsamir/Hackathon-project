import React from 'react'
import Dashboardnav from './Dashboardnav'

const Admindashboarlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Dashboardnav/>
        {children}
    </div>
  )
}

export default Admindashboarlayout