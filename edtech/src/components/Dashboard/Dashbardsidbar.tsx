'use client'
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import Link from 'next/link'; // Assuming you're using Next.js for routing
// import 'tailwindcss/tailwind.css';

const Sidebar = () => {
  return (
    <div className="w-64 h-[90vh] bg-white shadow-md p-6" style={{background: 'linear-gradient(180deg, #000000 0%, #711313 100%)'}}>
      <List sx={{color:'white'}}>
        <Link href="/Dashboard" passHref>
          <ListItemButton sx={{color:'white', bgcolor:'#711313', '&:hover': { bgcolor: '#8b1a1a' }, mb: 2, borderRadius: 2}}>
            <ListItemIcon sx={{color:'white'}}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>
        <Link href="/Dashboard/courses" passHref>
          <ListItemButton sx={{color:'white', bgcolor:'#711313', '&:hover': { bgcolor: '#8b1a1a' }, mb: 2, borderRadius: 2}}>
            <ListItemIcon sx={{color:'white'}}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItemButton>
        </Link>

        <Link href="/Dashboard/mocktest" passHref>
          <ListItemButton sx={{color:'white', bgcolor:'#711313', '&:hover': { bgcolor: '#8b1a1a' }, mb: 2, borderRadius: 2}}>
            <ListItemIcon sx={{color:'white'}}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Mock Test" />
          </ListItemButton>
        </Link>

        <Link href="/Dashboard/profile" passHref>
          <ListItemButton sx={{color:'white', bgcolor:'#711313', '&:hover': { bgcolor: '#8b1a1a' }, mb: 2, borderRadius: 2}}>
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
