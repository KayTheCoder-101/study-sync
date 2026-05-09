import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  const handleSearchFocus = () => {
    navigate("/tasks");
  };

  return (
    <header className="top-navbar">
      <div>
        <h4>Smart Task & Assignment Manager</h4>
        <p>Manage your academic tasks, deadlines, and progress.</p>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search tasks..."
            onFocus={handleSearchFocus}
            readOnly
          />
        </div>

        <button className="notification-btn">
          <i className="bi bi-bell"></i>
        </button>

        <div className="user-profile">
          <div className="avatar">
            {currentUser ? currentUser.name.charAt(0).toUpperCase() : "S"}
          </div>

          <span>{currentUser ? currentUser.name : "Student"}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;