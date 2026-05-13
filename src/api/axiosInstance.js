import axios from 'axios';

// Create a base instance
const api = axios.create({
  baseURL: 'https://mock-backend-hintro.vercel.app/', // From the assignment PDF [cite: 35]
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * We use an "Interceptor" to inject the user ID before every request.
 * This makes switching between u1 and u2 seamless.
 */
// src/api/axiosInstance.js
api.interceptors.request.use((config) => {
  // Always pull the freshest ID directly from storage before the request flies out
  const activeUser = localStorage.getItem('activeUserId') || 'u1'; 
  config.headers['x-user-id'] = activeUser;
  return config;
});

export default api;