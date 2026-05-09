import TaskCard from "../components/TaskCard";

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="page-title">
        <h2>Dashboard</h2>
        <p>Welcome back! Here is your study progress overview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <i className="bi bi-list-task purple"></i>
          <h3>12</h3>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-hourglass-split orange"></i>
          <h3>7</h3>
          <p>Pending Tasks</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-check-circle green"></i>
          <h3>5</h3>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-alarm red"></i>
          <h3>3</h3>
          <p>Due Soon</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="content-card">
          <h5>Upcoming Deadlines</h5>

          <TaskCard
            title="Web Programming Project"
            date="Due: May 15, 2026"
            status="Pending"
          />

          <TaskCard
            title="Data Structures Assignment"
            date="Due: May 18, 2026"
            status="Pending"
          />

          <TaskCard
            title="English Essay"
            date="Due: May 20, 2026"
            status="Completed"
          />
        </div>

        <div className="content-card">
          <h5>Task Progress</h5>

          <div className="progress-circle">
            <h2>58%</h2>
            <p>Completed</p>
          </div>

          <div className="progress-info">
            <p>
              <span className="dot green-bg"></span> Completed Tasks: 5
            </p>
            <p>
              <span className="dot orange-bg"></span> Pending Tasks: 7
            </p>
            <p>
              <span className="dot purple-bg"></span> Total Tasks: 12
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;