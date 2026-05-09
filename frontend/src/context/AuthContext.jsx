import { createContext, useContext, useState } from "react";
import API from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("studysync_current_user");

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return null;
  });

  const register = async (name, email, password) => {
    try {
      const response = await API.post("/auth/register", {
        name: name,
        email: email,
        password: password,
      });

      localStorage.setItem("studysync_token", response.data.token);
      localStorage.setItem(
        "studysync_current_user",
        JSON.stringify(response.data.user)
      );

      setCurrentUser(response.data.user);

      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Registration failed. Try again.",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await API.post("/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("studysync_token", response.data.token);
      localStorage.setItem(
        "studysync_current_user",
        JSON.stringify(response.data.user)
      );

      setCurrentUser(response.data.user);

      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed. Try again.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("studysync_token");
    localStorage.removeItem("studysync_current_user");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}