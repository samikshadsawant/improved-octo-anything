import api from './axiosInstance';

export const HintroApi = {
  // 1. Get Profile Info (User name, email, etc.)
  getProfile: () => api.get('/api/auth/profile'),

  // 2. Get Dashboard Data (Subscription and Usage)
  getDashboard: () => api.get('/api/auth/dashboard'),

  // 3. Get Call Stats (Total sessions, Avg duration)
  getStats: () => api.get('/api/call-sessions/stats'),

  // 4. Get Call History (List of sessions)
  getCallHistory: (limit = 10) => api.get(`/api/call-sessions?limit=${limit}`),

  // 5. Health Check (Just to verify the server is up)
  checkHealth: () => api.get('/health'),
};