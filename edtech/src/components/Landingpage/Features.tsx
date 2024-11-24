import React from "react";
import { FaVideo } from "react-icons/fa";
import { MdLibraryBooks, MdQuiz, MdAnalytics, MdForum } from "react-icons/md";

const Features = () => {
  const features = [
    {
      title: "Video Lectures",
      description:
        "Upload and stream high-quality, topic-specific video lectures. Include features like playback speed control, subtitles, and bookmarks for efficient revision.",
      icon: FaVideo,
    },
    {
      title: "Study Materials",
      description:
        "Provide digital notes, PDFs, and slide decks for each subject or topic. Enable annotation and text-highlighting capabilities for students.",
      icon: MdLibraryBooks,
    },
    {
      title: "Mock Tests",
      description:
        "Include timed quizzes and full-length simulated exams. Provide immediate scoring and detailed feedback on performance.",
      icon: MdQuiz,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Generate personalized reports showcasing strengths, weaknesses, and areas for improvement. Use visual analytics (charts and graphs) to track progress over time.",
      icon: MdAnalytics,
    },
    // {
    //   title: "Interactive Tools",
    //   description:
    //     "Integrate live Q&A sessions, doubt-solving forums, or AI-based chatbots to assist with student queries. Set up discussion boards to promote peer learning and collaboration.",
    //   icon: MdForum,
    // },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 ">
      Key Features That Drive Your Success
      </h2>
      <div className="flex flex-wrap justify-center gap-8 pl-4 pr-4">
        {features.map((feature, index) => {
          const Icon = feature.icon; // Dynamically get the icon component
          return (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-md w-full sm:w-[250px] flex flex-col items-center shadow-md hover:shadow-lg"
            >
              <Icon size={60} className="text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
