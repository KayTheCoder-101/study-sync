import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <i className="bi bi-journal-check"></i>
        <span>StudySync</span>
      </div>

      <nav className="sidebar-menu">
        <Link to="/" className="menu-link active">
          <i className="bi bi-grid"></i>
          Dashboard
        </Link>

        <Link to="/tasks" className="menu-link">
          <i className="bi bi-list-task"></i>
          Tasks
        </Link>

        <a href="#" className="menu-link">
          <i className="bi bi-calendar-event"></i>
          Calendar
        </a>

        <a href="#" className="menu-link">
          <i className="bi bi-bell"></i>
          Reminders
        </a>

        <a href="#" className="menu-link">
          <i className="bi bi-bar-chart"></i>
          Progress
        </a>

        <a href="#" className="menu-link">
          <i className="bi bi-gear"></i>
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;