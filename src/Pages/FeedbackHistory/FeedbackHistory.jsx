import { useEffect, useState } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import './FeedbackHistory.css';

export default function FeedbackHistory({
  onGiveFeedback,
  onMenuToggle,
}) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem('hintro_feedback') || '[]'
    );

    setFeedbacks(stored);
  }, []);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'star filled' : 'star empty'}
      >
        ★
      </span>
    ));

  const formatDate = (iso) => {
    const d = new Date(iso);

    const day = d.getDate();

    const suffix =
      day === 1
        ? 'st'
        : day === 2
        ? 'nd'
        : day === 3
        ? 'rd'
        : 'th';

    const month = d.toLocaleString('default', {
      month: 'long',
    });

    const year = d.getFullYear();

    return `${day}${suffix} ${month} ${year}`;
  };

  const formatTime = (iso) =>
    new Date(iso).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="dashboard-layout">

      <div className="dashboard-main">

        <Topbar onMenuToggle={onMenuToggle} />

        <main className="dashboard-page">

          <div className="feedback-history-header">

            <h1 className="feedback-history-title">
              Feedback History
            </h1>

            <p className="feedback-history-subtitle">
              Browse your previous feedback submissions
            </p>

          </div>

          <div className="feedback-table-wrapper">

            <table className="feedback-table">

              <thead>
                <tr>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {feedbacks.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="table-empty-state"
                    >
                      <p>No feedbacks yet</p>

                      <button
                        className="give-feedback-btn"
                        onClick={onGiveFeedback}
                      >
                        Give Feedback
                      </button>
                    </td>
                  </tr>
                ) : (
                  feedbacks.map((fb) => (
                    <tr key={fb.id}>

                      <td>Feedback</td>

                      <td>
                        <span className="table-rating-stars">
                          {renderStars(fb.rating)}
                        </span>
                      </td>

                      <td>
                        {fb.message || 'No message added'}
                      </td>

                      <td>
                        {formatDate(fb.submittedAt)}
                      </td>

                      <td>
                        {formatTime(fb.submittedAt)}
                      </td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>
  );
}