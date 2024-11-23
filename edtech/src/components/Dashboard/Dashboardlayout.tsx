"use client"
import BasicBreadcrumbs from '@/components/Dashboard/Breadcrumbs'
import Dashbardsidbar from '@/components/Dashboard/Dashbardsidbar'
import Dashboardnav from '@/components/Dashboard/Dashboardnav'
import { Typography } from '@mui/material'
import { useParams, usePathname } from 'next/navigation'


const Dashboardlayout = ({children}:{children:React.ReactNode}) => {
    const path = usePathname()
    const correctpath = decodeURIComponent(path)
 
  const pathArray = correctpath.split('/').filter(Boolean); // Convert path to array and remove empty strings



    
    
//   const breadcrumbs = ['Dashboard', 'Courses'];
  return (
    <div className="w-full h-screen bg-gray-200">
       <Dashboardnav/>
       <div className="flex">
        <Dashbardsidbar/>
        <div className='overflow-y-auto h-[90vh] w-full custom-scroll   '>
            <div className="m-2 bg-white">
            <BasicBreadcrumbs breadcrumbs={pathArray} />
            </div>
            <div className=" w-full">
            {children}
            </div>

       
            </div>
          
        </div>
    </div>
  )
}

export default Dashboardlayout