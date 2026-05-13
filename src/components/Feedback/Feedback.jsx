import { useState } from 'react';
import './Feedback.css';

const Star = ({ filled, onClick }) => (
  <button
    type="button"
    className={`star-btn ${filled ? 'star-btn--active' : ''}`}
    onClick={onClick}
  >
    ★
  </button>
);

export default function Feedback({ onClose }) {
  const [rating, setRating]   = useState(0);
  const [message, setMessage] = useState('');
  const [step, setStep]       = useState(1);

  const handleRating = (value) => {
    setRating(value);
    setStep(2);
  };

  const handleSubmit = () => {
    const entry = {
      id:          Date.now(),
      rating,
      message,
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(
      localStorage.getItem('hintro_feedback') || '[]'
    );
    existing.unshift(entry);
    localStorage.setItem('hintro_feedback', JSON.stringify(existing));

    setStep(3);
  };

  return (
    <div className="feedback-overlay">
      <div className="feedback-modal">

        {step !== 3 ? (
          <>
            <div className="feedback-header">
              <h2>Give Feedback</h2>
              <p>Describe your experience using Hintro...</p>
            </div>

            <div className="feedback-stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  filled={rating >= value}
                  onClick={() => handleRating(value)}
                />
              ))}
            </div>

            {step === 2 && (
              <textarea
                className="feedback-textarea"
                placeholder={
                  rating <= 3 ? 'What frustrated you?' : 'What did you like?'
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            )}

            <div className="feedback-actions">
              <button className="feedback-btn secondary" onClick={onClose}>
                ← Back
              </button>
              <button
                className="feedback-btn primary"
                onClick={handleSubmit}
                disabled={!rating}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="feedback-success">
            <div className="success-icon">✓</div>
            <h2>Thank you for your feedback!</h2>
            <p>Your response has been recorded successfully.</p>
            <button
              className="feedback-btn primary success-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}