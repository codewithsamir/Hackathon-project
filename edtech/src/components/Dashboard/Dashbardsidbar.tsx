'use client'
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import { usePathname } from 'next/navigation';
// import 'tailwindcss/tailwind.css';

const Sidebar = () => {

  const pathname = usePathname(); // Get the current path using usePathname()

 
  const isActive = (path: string) => {
    // For Dashboard, we check if the pathname is exactly "/dashboard"
    if (path === '/Dashboard') {
      return pathname === path ?  'black' : '#000000a8'; // Exact match for Dashboard
    }
    // For other routes like /courses, /mocktest, etc., we check if the pathname starts with the given path
    return pathname?.startsWith(path) ?  'black' : '#000000a8'; // Highlight active link based on startsWith
  };
  return (
    <div className="w-[400px] h-[90vh] bg-white shadow-md  p-6" >
      <List sx={{color:'white'}}>
        <Link href="/Dashboard" passHref>
          <ListItemButton sx={{color:'white',mb: 2, borderRadius: 2, bgcolor:`${isActive('/Dashboard')}` , '&:hover':{bgcolor:'black', color:'white'}}} className='bg-black'>
            <ListItemIcon sx={{color:'white'}}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"  sx={{color:'white'}} />
          </ListItemButton>
        </Link>
        <Link href="/Dashboard/courses" passHref>
        <ListItemButton sx={{color:'white',mb: 2, borderRadius: 2, bgcolor:`${isActive('/Dashboard/courses')}`  , '&:hover':{bgcolor:'black', color:'white'}}} className='bg-black'>
            <ListItemIcon sx={{color:'white'}}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItemButton>
        </Link>

        <Link href="/Dashboard/mocktest" passHref>
        <ListItemButton sx={{color:'white',mb: 2, borderRadius: 2, bgcolor:`${isActive('/Dashboard/mocktest')}` , '&:hover':{bgcolor:'black', color:'white'}}} className='bg-black'>
            <ListItemIcon sx={{color:'white'}}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Mock Test" />
          </ListItemButton>
        </Link>
        <Link href="/Dashboard/drivinglicencetest" passHref>
        <ListItemButton sx={{color:'white',mb: 2, borderRadius: 2, bgcolor:`${isActive('/Dashboard/drivinglicencetest')}` , '&:hover':{bgcolor:'black', color:'white'}}} className='bg-black'>
            <ListItemIcon sx={{color:'white'}}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Driving Licence Test" />
          </ListItemButton>
        </Link>

        <Link href="/Dashboard/profile" passHref>
        <ListItemButton sx={{color:'white',mb: 2, borderRadius: 2, bgcolor:`${isActive('/Dashboard/profile')}`  , '&:hover':{bgcolor:'black', color:'white'}}} className='bg-black'>
            <ListItemIcon sx={{color:'white'}}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </Link>
       
       
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
