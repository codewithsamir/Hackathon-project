"use client";
import React from "react";
import Dashboardlayout from "@/components/Dashboard/Dashboardlayout";

const ProfilePage = () => {
  return (
    <Dashboardlayout>
      <div className="w-full h-full bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="/image.png"
                alt="User Name"
              />
              <h2 className="text-xl font-semibold mt-4">User Name</h2>
              <p className="text-gray-500 mt-2">user@example.com</p>
              <p className="text-gray-500 mt-1">Member since: Jan 2022</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
            </div>

            {/* Account Settings and Progress */}
            <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
              {/* Account Settings Section */}
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-500 mb-4">
                  Manage your account settings and preferences below:
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Change Password
                </button>
              </div>

              {/* Progress Section */}
              <h2 className="text-lg font-semibold mt-8 mb-4">Learning Progress</h2>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-500 mb-4">
                  Track your progress across enrolled courses:
                </p>
                <ul className="space-y-2">
                  <li>
                    <div className="flex justify-between">
                      <span>Data Science Bootcamp</span>
                      <span className="font-semibold">75% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span>Web Development Mastery</span>
                      <span className="font-semibold">50% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span>AI Fundamentals</span>
                      <span className="font-semibold">30% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default ProfilePage;
