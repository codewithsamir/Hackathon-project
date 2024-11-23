import React from "react";
import { FaVideo } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Video Lectures",
      description:
        "Watch high-quality video lessons, learn at your own pace, and control playback speed.",
    },
    {
      title: "Video Lectures",
      description:
        "Watch high-quality video lessons, learn at your own pace, and control playback speed.",
    },
    {
      title: "Video Lectures",
      description:
        "Watch high-quality video lessons, learn at your own pace, and control playback speed.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Key Features That Drive Your Success
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-md w-full sm:w-[300px] flex flex-col items-center shadow-md hover:shadow-lg"
          >
            <FaVideo size={60} className="text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-center text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
