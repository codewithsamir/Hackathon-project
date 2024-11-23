import Dashboardlayout from '@/components/Dashboard/Dashboardlayout';
import Mocktest from '@/components/Mocktest/Mocktest';
import React from 'react'
import { questions } from "@/utility/quizdata";

const page = ({params}:any) => {
    const mockid = decodeURIComponent(params.mockid);
  return (
        <Dashboardlayout>
    <div>
        <h1 className='text-3xl font-bold text-center p-4'  >{mockid}</h1>

        <Mocktest questions={questions}/>
    </div>

    </Dashboardlayout>
  )
}

export default page