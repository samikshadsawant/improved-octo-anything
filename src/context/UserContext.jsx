/* src/context/UserContext.jsx */
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

  const loginAs = (id) => {
  if (id !== 'u1' && id !== 'u2') {
    alert('Use u1 or u2 as username');
    return;
  }

  setUserId(id);
  localStorage.setItem('userId', id);
};

  const switchUser = () => {
    const newId = userId === 'u1' ? 'u2' : 'u1';
    setUserId(newId);
    localStorage.setItem('userId', newId);
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem('userId');
  };

  return (
    <UserContext.Provider value={{ userId, loginAs, switchUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);