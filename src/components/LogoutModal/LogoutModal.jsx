import './LogoutModal.css';
import { useUser } from '../../context/UserContext';

export default function LogoutModal({ onClose }) {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div
      className="logout-overlay"
      onClick={(e) =>
        e.target === e.currentTarget && onClose()
      }
    >
      <div className="logout-modal">

        <div className="logout-header">
          <h2>Leaving already?</h2>

          <div className="logout-divider"></div>

          <p>
            You can log back in anytime to continue your
            meetings with Hintro.
          </p>
        </div>

        <div className="logout-actions">

          <button
            className="logout-btn secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="logout-btn primary"
            onClick={handleLogout}
          >
            Log out
          </button>

        </div>

      </div>
    </div>
  );
}