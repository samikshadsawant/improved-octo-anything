import { formatDuration, formatRelativeTime } from '../../utils/formatters';
import './StatsCards.css';

const DATA = (stats) => [
  {
    label: 'Total Sessions',
    value: stats?.totalSessions ?? 0,
    icon: '🔴',
    color: 'red',
    customIcon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#ef4444" opacity="0.2"/>
        <path d="M12 2v10l6 3" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'Average Duration',
    value: formatDuration(stats?.avgDurationSeconds || 0),
    color: 'blue',
    customIcon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" fill="#dbeafe"/>
        <path d="M12 7v5l3 3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'AI Used',
    value: `${stats?.aiUsed ?? 0} times`,
    color: 'green',
    customIcon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#22c55e" opacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="#22c55e"/>
      </svg>
    ),
  },
  {
    label: 'Last Session',
    value: formatRelativeTime(stats?.lastSessionTimestamp),
    color: 'purple',
    customIcon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#7c3aed" strokeWidth="2" fill="#ede9fe"/>
        <path d="M3 9h18" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M8 2v4M16 2v4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
        <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#7c3aed"/>
        <rect x="14" y="13" width="3" height="3" rx="0.5" fill="#7c3aed"/>
      </svg>
    ),
  },
];

export default function StatsCards({ stats }) {
  return (
    <div className="stats-grid">
      {DATA(stats).map((item, i) => (
        <div className="stat-card" key={i}>
          <div className={`stat-icon ${item.color}`}>
            {item.customIcon}
          </div>
          <div>
            <p className="stat-label">{item.label}</p>
            <h3 className="stat-value">{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}