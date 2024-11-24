'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAuthStore } from '@/store/useauthStore'; // Import Zustand store

const Nav = () => {
  const { user, logout, checkAuthStatus } = useAuthStore(); // Access user state and actions

  // Check for user token on component mount
  useEffect(() => {
    checkAuthStatus(); // Automatically check the token when the component mounts
  }, [checkAuthStatus]);

  return (
    <header className="w-full h-16 bg-black px-6 py-6">
      <div className="w-full h-10 flex justify-between items-center pb-6">
        {/* Logo */}
        <div className="ml-4 sm:ml-8 lg:ml-32">
          {/* <img src="/skill1.png" alt="logo" /> */}
          <h1 className='text-white text-2xl font-bold'>Digiskill</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          <nav className="text-white font-medium flex gap-4 px-4">
            <Link href="/" className="hover:text-red-500 text-lg">
              Home
            </Link>
            <Link href="/course" className="hover:text-red-500 text-lg">
              Course
            </Link>
            <Link href="/Entrancepreparation" className="hover:text-red-500 text-lg">
              Entrance Preparation
            </Link>

            {/* Show Dashboard link only if the user is logged in */}
            {user && (
              <Link href="/dashboard" className="hover:text-red-500 text-lg">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Conditional rendering of Login/Signup or Logout button */}
          <div className="mt-2 md:mt-0">
            {!user ? (
              <Link href="/login">
                <button className="w-28 h-8 bg-red-600 rounded-full text-white text-sm md:w-32 md:h-10">
                  Login/Signup
                </button>
              </Link>
            ) : (
              <button
                onClick={() => logout()} // Logout action
                className="w-28 h-8 bg-red-600 rounded-full text-white text-sm md:w-32 md:h-10"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
