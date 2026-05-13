import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { fetchDashboard } from '../../api/mockApi';

import Topbar from '../../components/Topbar/Topbar';
import StatsCards from '../../components/StatsCards/StatsCards';
import RecentCalls from '../../components/RecentCalls/RecentCalls';

import './Dashboard.css';

export default function Dashboard({ onMenuToggle }) {
  const { userId } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDashboard(userId).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [userId]);

  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Topbar userData={data} onMenuToggle={onMenuToggle} />

        <main className="dashboard-page">
          <div className="dashboard-header">
            <div className="dashboard-header-left">
              <h1 className="dashboard-title">
                Hi, {data?.user?.name || 'User'} 👋 Welcome to Hintro
              </h1>
              <p className="dashboard-subtitle">
                Ready to make your next call smarter ?
              </p>
            </div>
            <button className="start-call-btn">Start New Call</button>
          </div>

          <div className="dashboard-stats">
            <StatsCards stats={data?.stats} loading={loading} />
          </div>

          <div className="dashboard-calls">
            <h2 className="recent-calls-title">Recent calls</h2>
            <RecentCalls
              calls={data?.recentCalls || []}
              loading={loading}
            />
          </div>
        </main>
      </div>
    </div>
  );
}