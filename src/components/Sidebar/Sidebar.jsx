import { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import './Sidebar.css';

const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" fill="currentColor"/>
    <rect x="10.5" y="1" width="6.5" height="6.5" rx="1.5" fill="currentColor"/>
    <rect x="1" y="10.5" width="6.5" height="6.5" rx="1.5" fill="currentColor"/>
    <rect x="10.5" y="10.5" width="6.5" height="6.5" rx="1.5" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 2h3l1.5 3.5-1.75 1.25a9.5 9.5 0 004 4L11.5 9l3.5 1.5v3a1.5 1.5 0 01-1.5 1.5A13.5 13.5 0 012 2a1.5 1.5 0 011.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1H4a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 004 17h10a1.5 1.5 0 001.5-1.5V6.5L10 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 1v5.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 10h6M6 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 9a6.5 6.5 0 01-9.5 5.75L2 16l1.25-4A6.5 6.5 0 1115.5 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6.5" cy="9" r="1" fill="currentColor"/>
    <circle cx="9" cy="9" r="1" fill="currentColor"/>
    <circle cx="11.5" cy="9" r="1" fill="currentColor"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 1v2M9 15v2M1 9h2M15 9h2M2.93 2.93l1.41 1.41M13.66 13.66l1.41 1.41M2.93 15.07l1.41-1.41M13.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HistoryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 8a6.5 6.5 0 106.5-6.5H5M5 1L2.5 3.5 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="6" width="13" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M1.5 8.5h13M8 6v8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M8 6S6 6 5 5s-.5-3 2-2 1 3 1 3zM8 6s2 0 3-1 .5-3-2-2-1 3-1 3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2.5" y="3.5" width="11" height="2.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);

const NAV_ITEMS = [
  { id: 'dashboard',      label: 'Dashboard',      icon: <DashboardIcon /> },
  { id: 'call-insights',  label: 'Call Insights',  icon: <PhoneIcon /> },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: <DocumentIcon /> },
  { id: 'prompts',        label: 'Prompts',         icon: <ChatIcon /> },
  { id: 'boxy-controls',  label: 'Boxy Controls',  icon: <SettingsIcon /> },
  
];

const INFO_IDS = new Set(['knowledge-base', 'prompts', 'boxy-controls']);

export default function Sidebar({ activeNav, onNavChange, isOpen, onClose }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'sidebar-overlay--show' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-mobile-top">
            <button className="sidebar-close" onClick={onClose}>✕</button>
          </div>

          <h1 className="sidebar-logo">Hintro</h1>

          <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`sidebar-item ${activeNav === item.id ? 'sidebar-item--active' : ''}`}
                onClick={() => { onNavChange(item.id); onClose?.(); }}
              >
                <div className="sidebar-item-left">
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </div>
                {INFO_IDS.has(item.id) && (
                  <span className="sidebar-info">i</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <button
  className={`sidebar-bottom-item ${
    activeNav === 'feedback-history'
      ? 'sidebar-item--active'
      : ''
  }`}
  onClick={() => {
    onNavChange('feedback-history');
    onClose?.();
  }}
>
  <HistoryIcon /> Feedback History
</button>

          <button
            className="sidebar-bottom-item"
            onClick={() => setFeedbackOpen(true)}
          >
            <GiftIcon /> Feedback
          </button>

          <button className="upgrade-btn">Upgrade</button>
        </div>
      </aside>

      {feedbackOpen && (
        <Feedback onClose={() => setFeedbackOpen(false)} />
      )}
    </>
  );
}