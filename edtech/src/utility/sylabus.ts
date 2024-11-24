export const syllabusdata = [
  {
    id: 1,
    title: "Introduction to React",
    image:"/course_webD.jpg",
    description: "Learn the basics of React and how it can be used to build dynamic user interfaces.",
    subtopics: [
      { id: 101, title: "What is React?", url: "https://www.youtube.com/embed/QO5gOinKu1Q", completed: false, description: "Introduction to React and why it's a powerful JavaScript library for building user interfaces." },
      { id: 102, title: "React Basics", url: "https://www.example.com/video2.mp4", completed: false, description: "Learn about JSX, components, and the core principles of React." }
    ],
    quiz: [
      {
        question: "What is React?",
        options: ["A programming language", "A JavaScript library", "A CSS framework", "A design pattern"],
        correctAnswer: "A JavaScript library",
        explanation: "React is a JavaScript library for building user interfaces, developed by Facebook."
      },
      {
        question: "What does JSX stand for in React?",
        options: ["JavaScript XML", "JavaScript Extension", "JavaScript Exponential", "None of the above"],
        correctAnswer: "JavaScript XML",
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React components."
      }
    ]
  },
  {
    id: 2,
    title: "Advanced React",
    description: "Dive deeper into React with advanced concepts such as hooks, state management, and more.",
    subtopics: [
      { id: 201, title: "React Hooks", url: "https://www.example.com/video3.mp4", completed: false, description: "Learn about React hooks like useState, useEffect, and more to manage state and side effects." },
      { id: 202, title: "Context API", url: "https://www.example.com/video4.mp4", completed: false, description: "Learn how to manage global state using React's Context API." }
    ],
    quiz: [
      {
        question: "What is the purpose of React hooks?",
        options: ["To manage state", "To handle events", "To interact with the DOM", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "React hooks like useState and useEffect are used to manage state, handle events, and interact with the DOM in functional components."
      },
      {
        question: "What is the Context API used for in React?",
        options: ["Managing local component state", "Managing global state", "Handling routing", "Styling components"],
        correctAnswer: "Managing global state",
        explanation: "The Context API is used for managing global state that can be accessed by any component in the component tree."
      }
    ]
  },
  {
    id: 3,
    title: "React Router",
    description: "Learn how to handle routing and navigation in React applications.",
    subtopics: [
      { id: 301, title: "Setting up React Router", url: "https://www.example.com/video5.mp4", completed: false, description: "Learn how to set up React Router to enable client-side navigation in your React app." },
      { id: 302, title: "Nested Routes", url: "https://www.example.com/video6.mp4", completed: false, description: "Understand how to create nested routes to manage complex layouts in your React application." }
    ],
    quiz: [
      {
        question: "What is React Router used for?",
        options: ["Handling forms", "Client-side navigation", "Managing state", "Displaying data"],
        correctAnswer: "Client-side navigation",
        explanation: "React Router is a library used for handling client-side navigation in React applications."
      },
      {
        question: "What are nested routes in React Router?",
        options: ["Sub-routes inside a parent route", "Routes that handle nested data", "A type of component", "None of the above"],
        correctAnswer: "Sub-routes inside a parent route",
        explanation: "Nested routes are routes defined inside another route, allowing for complex layouts."
      }
    ]
  },
  {
    id: 4,
    title: "State Management in React",
    description: "Learn how to manage and update state effectively in React apps.",
    subtopics: [
      { id: 401, title: "useState Hook", url: "https://www.example.com/video7.mp4", completed: false, description: "Learn the useState hook for managing state in functional components." },
      { id: 402, title: "useReducer Hook", url: "https://www.example.com/video8.mp4", completed: false, description: "Understand the useReducer hook for more complex state logic." }
    ],
    quiz: [
      {
        question: "What is the useState hook used for?",
        options: ["To manage local component state", "To perform side effects", "To handle events", "All of the above"],
        correctAnswer: "To manage local component state",
        explanation: "The useState hook allows you to manage and update the state in a functional component."
      },
      {
        question: "What is useReducer used for in React?",
        options: ["Managing simple state", "Managing complex state logic", "Handling events", "None of the above"],
        correctAnswer: "Managing complex state logic",
        explanation: "The useReducer hook is used for managing more complex state logic, especially when state transitions depend on previous state."
      }
    ]
  },
  {
    id: 5,
    title: "Handling Forms in React",
    description: "Learn how to create and manage forms in React applications.",
    subtopics: [
      { id: 501, title: "Controlled Components", url: "https://www.example.com/video9.mp4", completed: false, description: "Learn how to handle forms using controlled components in React." },
      { id: 502, title: "Uncontrolled Components", url: "https://www.example.com/video10.mp4", completed: false, description: "Learn how to work with uncontrolled components for handling form inputs in React." }
    ],
    quiz: [
      {
        question: "What is a controlled component in React?",
        options: ["A component that manages its own state", "A component where state is controlled by a parent", "A component that does not use state", "None of the above"],
        correctAnswer: "A component where state is controlled by a parent",
        explanation: "In a controlled component, form input elements are controlled by React state, and their value is passed from the parent."
      },
      {
        question: "What is an uncontrolled component in React?",
        options: ["A component that uses refs", "A component that does not use state", "A component that uses the Context API", "None of the above"],
        correctAnswer: "A component that uses refs",
        explanation: "An uncontrolled component does not store its state in React state; instead, it uses a ref to access the DOM directly."
      }
    ]
  },
  // Add similar quiz objects for all other topics and subtopics...
];

