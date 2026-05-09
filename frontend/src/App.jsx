import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Navbar />
              <Dashboard />
            </main>
          </div>
        }
      />

      <Route
        path="/tasks"
        element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Navbar />
              <Tasks />
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;