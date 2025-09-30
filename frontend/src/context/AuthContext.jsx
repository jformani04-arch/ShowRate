// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn && data.user) {
          setUser({
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            profilePhoto: data.user.profilePhoto || "/uploads/default-avatar.png",
            bio: data.user.bio || "",
            lastActive: data.user.lastActive || null,
            dateJoined: data.user.dateJoined || null,
          });
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  }, []);

  function login(token, userData) {
    localStorage.setItem("token", token);
    setUser({
      id: userData.id,
      username: userData.username,
      email: userData.email,
      profilePhoto: userData.profilePhoto || "/uploads/default-avatar.png",
      bio: userData.bio || "",
      lastActive: userData.lastActive || null,
      dateJoined: userData.dateJoined || null,
    });
  }

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

export function useAuth() {
  return useContext(AuthContext);
}
