"use client"
import BasicBreadcrumbs from '@/components/Dashboard/Breadcrumbs'
import Sidebar from '@/components/Dashboard/Dashbardsidbar'
import Dashbardsidbar from '@/components/Dashboard/Dashbardsidbar'
import Dashboardnav from '@/components/Dashboard/Dashboardnav'
import { Typography } from '@mui/material'
import { useParams, usePathname } from 'next/navigation'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";



const Dashboardlayout = ({children}:{children:React.ReactNode}) => {
    const path = usePathname()
    const correctpath = decodeURIComponent(path)
 
  const pathArray = correctpath.split('/').filter(Boolean); // Convert path to array and remove empty strings


// Define the menu items
const menuItems = [
  { path: "/Dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { path: "/Dashboard/courses", label: "Courses", icon: <SchoolIcon /> },
  { path: "/Dashboard/mocktest", label: "Mock Test", icon: <AccountCircleIcon /> },
  { path: "/Dashboard/drivinglicencetest", label: "Driving Licence Test", icon: <AccountCircleIcon /> },
  { path: "/Dashboard/profile", label: "Profile", icon: <AccountCircleIcon /> },
];
    
    
//   const breadcrumbs = ['Dashboard', 'Courses'];
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

export default Dashboardlayout