import React from 'react';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="text-white flex flex-wrap md:flex-nowrap justify-start items-start gap-8 md:gap-20 bg-gradient-to-b from-black to-red-800 p-5 text-sm">
        {/* Logo */}
        <div className="w-full md:w-auto mx-5 md:mx-20 text-lg font-bold">
         <img src="/skill1.png" alt="" />
        
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-auto flex flex-col space-y-2">
          <div className="font-semibold">Quick Links</div>
          <a href="#" className="hover:text-red-400">
            Home
          </a>
          <a href="#" className="hover:text-red-400">
            Courses
          </a>
          <a href="#" className="hover:text-red-400">
            Blog
          </a>
          <a href="#" className="hover:text-red-400">
            Contact Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-auto flex flex-col space-y-2">
          <div className="font-semibold">Contact Info</div>
          <div>Address: 123 Main Street</div>
          <div>Contact Number: +123-456-7890</div>
          <div>Email: info@example.com</div>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-auto">
          <div className="font-semibold">Social Media Link</div>
          <a href="#" className="hover:text-red-400 block text-center p-2 text-2xl">
          <FaFacebook />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
