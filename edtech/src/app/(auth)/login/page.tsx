'use client';
import Pagelayout from '@/components/Landingpage/Pagelayout';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import { useAuthStore } from '@/store/useauthStore'; // Import the Zustand store
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import axios from 'axios'; // You can use Axios for API requests

const Login = () => {
  // State variables to hold form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useAuthStore(); // Access login state from Zustand
  const [localError, setLocalError] = useState(''); // Local error state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state
  const router = useRouter(); // Initialize useRouter hook

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(''); // Reset local error message
    setSuccessMessage(''); // Reset success message

    try {
      // Call the login action from Zustand store
      await login(email, password);

      if (error) {
        setLocalError(error); // Set error if login fails
      } else {
        setSuccessMessage('Login successful!'); // Display success message
        router.push('/Dashboard'); // Redirect to dashboard after login
      }
    } catch (err) {
      setLocalError('Something went wrong, please try again.');
    }
  };

  return (
    <Pagelayout>
      <div className="h-[85vh] flex items-center justify-center p-5">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 sm:p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Set email
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Set password
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-600">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col space-y-4">
            {/* Google Login */}
            <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition duration-300">
              <FcGoogle size={24} className="mr-3" />
              Log in with Google
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>

          {/* Display success or error message */}
          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
          {localError && <p className="text-red-500 text-center mt-4">{localError}</p>}
        </div>
      </div>
    </Pagelayout>
  );
};

export default Login;
