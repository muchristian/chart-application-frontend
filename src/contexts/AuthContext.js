import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "../config/firebase";
import TokenService from "../services/TokenService";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({
  currentUser: "ddddd",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function isLoggedIn() {
    const token = TokenService.getAccessToken();
    console.log(token);
    if (token) {
      const result = jwtDecode(token);
      console.log(result);
      setLoading(false);
      console.log(result);
      setCurrentUser(result);
    }
    setLoading(false);
  }
  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(currentUser);
  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
