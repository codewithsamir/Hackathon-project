import Dashboardlayout from '@/components/Dashboard/Dashboardlayout'
import Dashboardmainpage from '@/components/Dashboard/Dashboardmainpage'
import React from 'react'

const page = () => {
  return (

    <Dashboardlayout>
    <div className="w-full  h-full " style={{width:'calc(100% - 300px)'}}>
        <Dashboardmainpage/>
    </div>
    </Dashboardlayout>
  )
}

export default page