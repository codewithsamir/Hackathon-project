'use client';
import Pagelayout from "@/components/Landingpage/Pagelayout";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { useAuthStore } from "@/store/useauthStore"; // Import the Zustand store
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const Signup = () => {
  // State object for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { register, error, loading, user } = useAuthStore(); // Access Zustand actions
  const [localError, setLocalError] = useState(""); // Local error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const router = useRouter(); // Initialize useRouter hook

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(""); // Reset local error message
    setSuccessMessage(""); // Reset success message

    try {
      await register(formData.username, formData.email, formData.password);
      if (error) {
        setLocalError(error); // Display the error if registration fails
      } else {
        setSuccessMessage("Registration successful!"); // Display success message
        setFormData({ username: "", email: "", password: "" }); // Clear form fields after success
      }
    } catch (err) {
      setLocalError("Something went wrong, please try again.");
    }
  };

  // Handle change in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the corresponding field in formData
    }));
  };

  // Effect to redirect if user is authenticated
  React.useEffect(() => {
    if (user) {
      router.push('/Dashboard'); // Redirect to Dashboard if user is authenticated
    }
  }, [user, router]); // Runs whenever 'user' state changes

  return (
    <Pagelayout>
      <div className="h-[85vh] flex items-center justify-center p-5">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 sm:p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h1>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange} // Use handleChange
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange} // Use handleChange
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange} // Use handleChange
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-600">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Signup */}
          <div className="flex flex-col space-y-4">
            {/* Google Signup */}
            <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition duration-300">
              <FcGoogle size={24} className="mr-3" />
              Sign up with Google
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log In
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

export default Signup;
