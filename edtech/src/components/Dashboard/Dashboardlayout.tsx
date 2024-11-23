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
    <div className="w-full h-screen">
       <Dashboardnav/>
       <div className="flex">
        <Dashbardsidbar/>
        <div className='overflow-y-auto h-[90vh] w-full custom-scroll'>
            <BasicBreadcrumbs breadcrumbs={pathArray} />
            <div className="whole w-full">
            {children}
            </div>

       
            </div>
          
        </div>
    </div>
  )
}

export default Dashboardlayout