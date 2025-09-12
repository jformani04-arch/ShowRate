// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On app load, check localStorage for a saved token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); 
    }
  }, []);

  // Called when login succeeds
  function login(token) {
    localStorage.setItem("token", token);
    setUser({ token });
  }

  // Called when logout button is clicked
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access context in components
export function useAuth() {
  return useContext(AuthContext);
}
