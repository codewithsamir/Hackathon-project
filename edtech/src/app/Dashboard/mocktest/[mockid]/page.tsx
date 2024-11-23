import Dashboardlayout from '@/components/Dashboard/Dashboardlayout';
import Mocktest from '@/components/Mocktest/Mocktest';
import React from 'react'

const page = ({params}:any) => {
    const mockid = decodeURIComponent(params.mockid);
  return (
        <Dashboardlayout>
    <div>
        <h1 className='text-3xl font-bold text-center p-4'  >{mockid}</h1>

        <Mocktest/>
    </div>

    </Dashboardlayout>
  )
}

export default page