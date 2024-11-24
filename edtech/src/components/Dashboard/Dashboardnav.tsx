"use client"
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { BiUserCheck } from 'react-icons/bi';
import { useAuthStore } from '@/store/useauthStore'; // Adjust the path as needed
import { useRouter } from 'next/navigation';

const Dashboardnav = ({ classname }: any) => {
  const { logout } = useAuthStore(); // Access logout from zustand store
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Clear user and tokens
    router.push('/login'); // Redirect to login page
  };

  return (
    <div
      className={`navbar w-full h-[10vh] flex justify-between items-center py-2 px-8 ${classname} bg-white shadow-sm`}
    >
      {/* Logo */}
      <Link href="/Dashboard">
        <div className="logo text-2xl font-bold cursor-pointer">Digiskill</div>
      </Link>

      {/* Profile Section */}
      <div className="profile flex items-center gap-4">
        <div className="avatar">
          <BiUserCheck size={30} />
        </div>
        {/* Logout Button */}
        <div className="logout">
          <Button
            variant="contained"
            className="bg-blue-500 text-white"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboardnav;
