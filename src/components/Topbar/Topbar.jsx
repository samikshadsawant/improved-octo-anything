import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import LogoutModal from '../LogoutModal/LogoutModal';
import './Topbar.css';

function PlayIcon() {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
      <path d="M0 0l8 5-8 5V0z"/>
    </svg>
  );
}

export default function Topbar({ onMenuToggle, userData }) {
  const { userId } = useUser();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const initials = userData?.user?.firstName?.[0] || 'U';
  const avatarUrl = userData?.user?.avatarUrl;

  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <button className="menu-btn" onClick={onMenuToggle}>☰</button>
          <h1 className="topbar-title">Dashboard</h1>
        </div>

        <div className="topbar-right">
          <button className="tutorial-btn">
            <span className="tutorial-btn__play">
              <PlayIcon />
            </span>
            Watch Tutorial
          </button>

          <button
            className="avatar-btn"
            onClick={() => setLogoutOpen(true)}
            aria-label="User menu"
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt={initials} />
            ) : (
              initials
            )}
          </button>
        </div>
      </header>

      {logoutOpen && (
        <LogoutModal onClose={() => setLogoutOpen(false)} />
      )}
    </>
  );
}