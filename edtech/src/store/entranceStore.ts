import { create } from 'zustand';
import axios from 'axios';

// Define the types
interface Entrance {
  _id: string;
  name: string;
  description: string;
  category: string;
  duration: number;
  passingScore: number;
  questions: string[];
}

interface EntranceCategory {
  _id: string;
  name: string;
}

interface EntranceQuestion {
  _id: string;
  questionText: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  testId: string;
}

interface EntranceStore {
  categories: EntranceCategory[];
  questions: EntranceQuestion[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  createEntrance: (entranceData: Omit<Entrance, '_id' | 'questions'>) => Promise<void>;
  addQuestion: (questionData: EntranceQuestion) => void;
}

const useEntranceStore = create<EntranceStore>((set) => ({
  categories: [],
  questions: [],
  loading: false,
  error: null,
  fetchCategories: async () => {
    try {
      const response = await axios.get('/api/entrance-categories');
      set({ categories: response.data });
    } catch (error) {
      set({ error: 'Error fetching categories' });
    }
  },
  createEntrance: async (entranceData) => {
    try {
      set({ loading: true });
      const response = await axios.post('/api/entrances', entranceData);
      set({ loading: false });
      // Handle response (e.g., redirect or show success message)
    } catch (error) {
      set({ error: 'Error creating entrance test', loading: false });
    }
  },
  addQuestion: (questionData) => {
    set((state) => ({ questions: [...state.questions, questionData] }));
  },
}));

export default useEntranceStore;
