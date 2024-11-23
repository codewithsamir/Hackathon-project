
"use client"
import Sidebar from '@/components/Dashboard/Dashbardsidbar'
import Dashboardnav from '@/components/Dashboard/Dashboardnav'
import React from 'react'

import AddBoxIcon from "@mui/icons-material/AddBox";  // For Add actions
import BookIcon from "@mui/icons-material/Book";  // For Book-related actions
import QuizIcon from "@mui/icons-material/Quiz";  // For Quiz-related actions
import AssignmentIcon from "@mui/icons-material/Assignment";  // For Course and Driving license
import BasicBreadcrumbs from '@/components/Dashboard/Breadcrumbs';
import { usePathname } from 'next/navigation';


const layout = ({children}:{children:React.ReactNode}) => {
    const menuItems = [
        { path: "/Admin/Addbookdetail", label: "Add Book Detail", icon: <BookIcon /> },
        { path: "/Admin/Addcourse", label: "Add Course", icon: <AssignmentIcon /> },
        { path: "/Admin/Adddrivinglicencedata", label: "Add Driving License Data", icon: <AssignmentIcon /> },
        { path: "/Admin/Addquizdata", label: "Add Quiz Data", icon: <QuizIcon /> },
      ];

      const path = usePathname()
      const correctpath = decodeURIComponent(path)
   
    const pathArray = correctpath.split('/').filter(Boolean); // Convert path to array and remove empty strings
  
  
      
  return (
 
        
    
      <div className="w-full h-screen bg-gray-200">
      <Dashboardnav/>
      <div className="flex">
      <Sidebar menuItems={menuItems} />
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

export default layout