// pages/contact.js
import Nav from '@/components/Landingpage/Nav';
import Pagelayout from '@/components/Landingpage/Pagelayout';
import React from 'react'

const ContactPage = () => {
  return (
    <Pagelayout>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        {/* Email */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">Feel free to reach out to us via email at:</p>
          <a href="mailto:contact@yourwebsite.com" className="text-blue-500 underline">
            contact@yourwebsite.com
          </a>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Inspirational Quote</h2>
          <p className="italic text-gray-600">"The best way to predict the future is to create it." - Abraham Lincoln</p>
        </div>
      </div>
    </div>
    </Pagelayout>
  )
}

export default ContactPage;
