import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <i className="bi bi-journal-check"></i>
        <span>StudySync</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" className="menu-link">
          <i className="bi bi-grid"></i>
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className="menu-link">
          <i className="bi bi-list-task"></i>
          Tasks
        </NavLink>

        <NavLink to="/history" className="menu-link">
          <i className="bi bi-clock-history"></i>
          History
        </NavLink>

        <NavLink to="/profile" className="menu-link">
          <i className="bi bi-person-circle"></i>
          Profile
        </NavLink>

        <NavLink to="/settings" className="menu-link">
          <i className="bi bi-gear"></i>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;