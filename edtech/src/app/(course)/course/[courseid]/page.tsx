
import { coursedata } from "@/utility/coursedata";
import Link from "next/link";

const CourseDetail = ({params}:any) => {
  const param = params.courseid;
  const id = decodeURIComponent(param).split("_")[1] // Retrieve the course title from the route

  // Find the course based on the title
  const course = coursedata.find(
    (c:any) => c.id == id
  );

  if (!course) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-red-500">Course Not Found</h1>
        <p className="mt-4">
          The course you are looking for doesn't exist. Please check the URL or
          go back to the courses page.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      {/* Course Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{course.title}</h1>

      {/* Course Image */}
      <img
        src={course.courseImageUrl}
        alt={course.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />

      {/* Description */}
      <p className="text-lg text-gray-700 mb-4">{course.description}</p>

      {/* Price */}
      <p className="text-lg font-semibold text-green-600 mb-4">
        Price: ${course.price}
      </p>

      {/* Syllabus */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Syllabus</h2>
      <Link
        href={course.syllabus}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mb-4 block"
      >
        View Syllabus
      </Link>

      {/* Lessons */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Lessons</h2>
      <ul className="list-disc list-inside text-gray-700">
        {course.lessons.map((lesson:any, index:any) => (
          <li key={index} className="mb-1">
            Lesson {index + 1}: {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
