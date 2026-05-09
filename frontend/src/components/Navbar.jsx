function Navbar() {
  return (
    <header className="top-navbar">
      <div>
        <h4>Smart Task & Assignment Manager</h4>
        <p>Manage your academic tasks, deadlines, and progress.</p>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search tasks..." />
        </div>

        <button className="notification-btn">
          <i className="bi bi-bell"></i>
        </button>

        <div className="user-profile">
          <div className="avatar">S</div>
          <span>Student</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;