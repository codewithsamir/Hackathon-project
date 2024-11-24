"use client";
import React, { useState } from "react";

const AddCourseForm = () => {
  // Initialize state for the form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    instructor: "",
    thumbnail: null,
    video: null,
    syllabus: "",
    price: 0,
  });

  // Handle input changes for text fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input changes for thumbnail and video uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Store only the first file
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    formDataObj.append('description', formData.description);
    formDataObj.append('category', formData.category);
    formDataObj.append('duration', formData.duration);
    formDataObj.append('instructor', formData.instructor);
    formDataObj.append('syllabus', formData.syllabus);
    formDataObj.append('price', formData.price.toString());
    if (formData.thumbnail) formDataObj.append('thumbnail', formData.thumbnail);
    if (formData.video) formDataObj.append('video', formData.video);

    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        alert('Course Added!');
        setFormData({
          title: "",
          description: "",
          category: "",
          duration: "",
          instructor: "",
          thumbnail: null,
          video: null,
          syllabus: "",
          price: 0,
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Create a New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter course title"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write a brief description of the course"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="" disabled>
              -- Select a Category --
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration (in hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter course duration"
            required
          />
        </div>

        {/* Instructor Name */}
        <div className="mb-4">
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter instructor name"
            required
          />
        </div>

        {/* Syllabus */}
        <div className="mb-4">
          <label htmlFor="syllabus" className="block text-sm font-medium text-gray-700">
            Syllabus
          </label>
          <textarea
            id="syllabus"
            name="syllabus"
            value={formData.syllabus}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter syllabus details"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (in dollars)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter course price"
            required
          />
        </div>

        {/* Thumbnail Upload */}
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
            Upload Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
          <small className="text-gray-500 block mt-2">Accepted formats: JPG, PNG, GIF</small>
        </div>

        {/* Video Upload */}
        <div className="mb-6">
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">
            Upload Course Video
          </label>
          <input
            type="file"
            id="video"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
          <small className="text-gray-500 block mt-2">Accepted formats: MP4, AVI, MKV</small>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-5 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
