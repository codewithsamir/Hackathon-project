import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

interface AuthState {
  user: { id: string; username: string; email: string } | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
  setUser: (user: { id: string; username: string; email: string }) => void;
  setError: (error: string) => void;
  clearUser: () => void;
  register: (username: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthStatus: () => void; // Add checkAuthStatus to verify user from cookies
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  setUser: (user) => set({ user, isAuthenticated: true, error: null }),
  setError: (error) => set({ error }),
  clearUser: () => set({ user: null, isAuthenticated: false, error: null }),

  // Check if the user is already authenticated by verifying cookies on app load
  checkAuthStatus: () => {
    const accessToken = Cookies.get('authToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken) {
      axios
        .get('/api/v1/users/refresh-token', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          set({ user: response.data.user, isAuthenticated: true, error: null });
        })
        .catch(() => {
          Cookies.remove('authToken');
          Cookies.remove('refreshToken');
          set({ user: null, isAuthenticated: false });
        });
    } else {
      set({ user: null, isAuthenticated: false });
    }
  },

  register: async (username, email, password) => {
    try {
      set({ loading: true });
      const response = await axios.post('http://localhost:8000/api/v1/users/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        const { accessToken, refreshToken, user } = response.data.data;
        
        // Store tokens in cookies
        if (accessToken) {
          Cookies.set('authToken', accessToken, { expires: 7 }); // 7 days expiry
        }
        if (refreshToken) {
          Cookies.set('refreshToken', refreshToken, { expires: 7 }); // 7 days expiry
        }

        set({ user, isAuthenticated: true, error: null });
      } else {
        set({ error: response.data.message || 'Registration failed' });
      }
    } catch (error: any) {
      set({
        error: error?.response?.data?.message || 'Something went wrong. Please try again later.',
      });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await axios.post('/api/v1/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken, user } = response.data;

        // Store tokens in cookies
        if (accessToken) {
          Cookies.set('authToken', accessToken, { expires: 7 }); // 7 days expiry
        }
        if (refreshToken) {
          Cookies.set('refreshToken', refreshToken, { expires: 7 }); // 7 days expiry
        }

        set({ user, isAuthenticated: true, error: null });
      } else {
        set({ error: response.data.message || 'Login failed' });
      }
    } catch (error: any) {
      set({
        error: error?.response?.data?.message || 'Something went wrong. Please try again later.',
      });
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    // Remove tokens from cookies on logout
    Cookies.remove('authToken');
    Cookies.remove('refreshToken');
    set({ user: null, isAuthenticated: false });
  },
}));
