const DB = {
u1: {
  user: {
    name: 'John Doe',
    initials: 'JD',
  },

  stats: {
    totalSessions: 0,
    avgDurationSeconds: 0,
    aiUsed: 0,
    lastSessionTimestamp: null,
  },

  recentCalls: [],
},

u2: {
  user: {
    name: 'Om Patel',
    initials: 'OP',
  },

  stats: {
    totalSessions: 22,
    avgDurationSeconds: 862,
    aiUsed: 147,
    lastSessionTimestamp: Date.now() - 172800000,
  },

  recentCalls: [
    {
      id: 'c1',
      date: '2025-04-29',
      title: 'Design Call',
      participants: ['K', 'A', 'R'],
      time: '11:00 am',
    },
  ],
},
};

export const fetchDashboard = async (userId) => {
  await new Promise(r => setTimeout(r, 700));
  return JSON.parse(JSON.stringify(DB[userId] ?? DB.u1));
};