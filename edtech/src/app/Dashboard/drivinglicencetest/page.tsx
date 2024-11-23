import Dashboardlayout from '@/components/Dashboard/Dashboardlayout'
import Mocktest from '@/components/Mocktest/Mocktest'
import { drivingTestQuestions } from '@/utility/drivingtest'


const page = () => {
  return (
    <Dashboardlayout>
    <div>
        <h1 className='text-3xl font-semibold text-center py-4' >Driving Licence Test</h1>
        <Mocktest questions={drivingTestQuestions}/>
    </div>
    </Dashboardlayout>
  )
}

export default page