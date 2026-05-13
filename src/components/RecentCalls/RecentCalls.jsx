import { groupCallsByDate, formatDateHeading } from '../../utils/formatters';
import './RecentCalls.css';

function ThreeDotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="2"/>
      <circle cx="12" cy="12" r="2"/>
      <circle cx="12" cy="19" r="2"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="#7c3aed" strokeWidth="2" fill="#ede9fe"/>
      <path d="M3 9h18" stroke="#7c3aed" strokeWidth="2"/>
      <path d="M8 2v4M16 2v4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#7c3aed"/>
    </svg>
  );
}

export default function RecentCalls({ calls = [], loading }) {
  const groups = groupCallsByDate(calls);

  if (loading) {
    return <div className="skeleton">Loading...</div>;
  }

  if (calls.length === 0) {
    return (
      <div className="recent-calls__empty">
        <div className="recent-calls__empty-icon">
          <CalendarIcon />
        </div>
        <h3>No Recent Calls</h3>
        <p>Connect your Google Calendar to see upcoming meetings, get reminders, and join calls directly from Hintro.</p>
        <button className="recent-calls__start-btn">Start a Call</button>
      </div>
    );
  }

  return (
    <section className="recent-calls">
      {groups.map(group => (
        <div key={group.date} className="call-group">
          <p className="call-group__date">{formatDateHeading(group.date)}</p>
          {group.calls.map(call => (
            <div key={call.id} className="call-row">
              <div className="call-row__avatar">
                {call.participants?.[0]?.[0] || 'K'}
              </div>
              <div className="call-row__info">
                <p className="call-row__title">{call.title}</p>
                <span className="call-row__participants">
                  {call.participants?.join(' · ') || '👥👥👥'}
                </span>
              </div>
              <div className="call-row__right">
                <span className="call-row__time">{call.time}</span>
                <button className="call-row__menu">
                  <ThreeDotsIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}