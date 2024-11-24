"use client";
import React, { useState } from 'react';
import useEntranceStore from '@/store/entranceStore';

const EntranceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    duration: 0,
    passingScore: 0,
  });

  const [questionData, setQuestionData] = useState({
    questionText: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
  });

  // Mock Categories Data (for testing purposes)
  const categories = [
    { _id: '1', name: 'Math' },
    { _id: '2', name: 'Science' },
    { _id: '3', name: 'History' },
  ];

  const [questions, setQuestions] = useState([]); // Manage questions added

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category) {
      alert('Please select a category');
      return;
    }

    const entranceData = {
      ...formData,
      questions: questions.map((q: any) => q._id), // Mapping questions to their IDs
    };

    console.log('Entrance Test Created:', entranceData);
    // You can call the API or Zustand action to create the entrance test here
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuestion = {
      _id: Math.random().toString(), // For testing purposes, we're generating a random ID
      ...questionData,
    };

    setQuestions([...questions, newQuestion]);
    setQuestionData({
      questionText: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-md">
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-2xl mb-4">Create Entrance Test</h2>

        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Description</label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Category</label>
          <select
            className="border border-gray-300 p-2 w-full"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block">Duration (in minutes)</label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Passing Score</label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full"
            value={formData.passingScore}
            onChange={(e) => setFormData({ ...formData, passingScore: Number(e.target.value) })}
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Entrance Test
        </button>
      </form>

      <hr className="my-6" />

      <h3 className="text-xl mb-4">Add Question</h3>
      <form onSubmit={handleQuestionSubmit}>
        <div className="mb-4">
          <label className="block">Question</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={questionData.questionText}
            onChange={(e) => setQuestionData({ ...questionData, questionText: e.target.value })}
            required
          />
        </div>

        {questionData.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="block">Option {index + 1}</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={option}
              onChange={(e) =>
                setQuestionData({
                  ...questionData,
                  options: questionData.options.map((opt, idx) =>
                    idx === index ? e.target.value : opt
                  ),
                })
              }
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block">Correct Answer (index)</label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full"
            value={questionData.correctAnswer}
            onChange={(e) => setQuestionData({ ...questionData, correctAnswer: Number(e.target.value) })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Explanation</label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={questionData.explanation}
            onChange={(e) => setQuestionData({ ...questionData, explanation: e.target.value })}
          />
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Add Question
        </button>
      </form>

      <div className="mt-6">
        <h4 className="text-lg">Questions Added:</h4>
        <ul>
          {questions.map((question: any) => (
            <li key={question._id}>{question.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EntranceForm;
