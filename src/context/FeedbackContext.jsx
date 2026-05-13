import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    const newFeedback = {
      id: Date.now(),

      title: feedback.title,

      description: feedback.description,

      rating: feedback.rating,

      date: new Date().toLocaleDateString(),

      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setFeedbacks((prev) => [
      newFeedback,
      ...prev,
    ]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}