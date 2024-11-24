import {create} from 'zustand';
import axios from 'axios';

// Define types for Course
interface Course {
  _id: string;
  title: string;
  description: string;
  syllabus: string;
  lessons: string[];
  courseImageUrl: string;
  instructorId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

// Define the type for Course store state
interface CourseStore {
  courses: Course[];
  loading: boolean;
  error: string | null;
  
  // Fetch all courses
  fetchCourses: () => Promise<void>;

  // Create a new course
  createCourse: (courseData: Omit<Course, '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;

  // Update an existing course
  updateCourse: (courseId: string, updatedData: Partial<Omit<Course, '_id' | 'createdAt' | 'updatedAt'>>) => Promise<void>;

  // Delete a course
  deleteCourse: (courseId: string) => Promise<void>;
}

const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  loading: false,
  error: null,

  // Fetch all courses
  fetchCourses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('/api/courses');
      set({ courses: response.data, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Something went wrong', loading: false });
    }
  },

  // Create a new course
  createCourse: async (courseData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/api/courses', courseData);
      set((state) => ({ courses: [...state.courses, response.data], loading: false }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Something went wrong', loading: false });
    }
  },

  // Update an existing course
  updateCourse: async (courseId, updatedData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/courses/${courseId}`, updatedData);
      set((state) => ({
        courses: state.courses.map((course) => course._id === courseId ? response.data : course),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Something went wrong', loading: false });
    }
  },

  // Delete a course
  deleteCourse: async (courseId) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/courses/${courseId}`);
      set((state) => ({
        courses: state.courses.filter((course) => course._id !== courseId),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Something went wrong', loading: false });
    }
  },
}));

export default useCourseStore;
