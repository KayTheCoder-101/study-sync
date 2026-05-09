import { Navigate, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

function ProtectedLayout({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedLayout>
            <Tasks />
          </ProtectedLayout>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedLayout>
            <History />
          </ProtectedLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedLayout>
            <Settings />
          </ProtectedLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;