import React, { createContext, useState, useEffect } from "react";
import { auth } from "./FirebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  const authContextValue = {
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
