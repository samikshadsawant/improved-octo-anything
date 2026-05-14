import { useState } from 'react';

import { UserProvider, useUser } from './context/UserContext';

import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import FeedbackHistory from './Pages/FeedbackHistory/FeedbackHistory';
import Login from './components/Login/Login';
import { FeedbackProvider } from './context/FeedbackContext';

import './index.css';

function AppContent() {
  const { userId } = useUser();

  const [activeNav, setActiveNav] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!userId) {
    return <Login />;
  }

  return (
    <div className="app-shell">

      <Sidebar
        activeNav={activeNav}
        onNavChange={(id) => {
          setActiveNav(id);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
      />

      <div className="main-wrapper">

        {activeNav === 'dashboard' && (
          <Dashboard
            onMenuToggle={() =>
              setSidebarOpen(!sidebarOpen)
            }
          />
        )}

        {activeNav === 'feedback-history' && (
          <FeedbackHistory />
        )}

      </div>

    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
  <FeedbackProvider>
    <AppContent />
  </FeedbackProvider>
</UserProvider>
  );
}