import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const {
    tasks,
    totalTasks,
    completedTasks,
    pendingTasks,
    dueSoonTasks,
  } = useTasks();

  const progressPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const upcomingTasks = tasks
    .filter((task) => task.status === "Pending")
    .slice(0, 3);

  return (
    <section className="dashboard-page">
      <div className="page-title">
        <h2>Dashboard</h2>
        <p>Welcome back! Here is your study progress overview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <i className="bi bi-list-task purple"></i>
          <h3>{totalTasks}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-hourglass-split orange"></i>
          <h3>{pendingTasks}</h3>
          <p>Pending Tasks</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-check-circle green"></i>
          <h3>{completedTasks}</h3>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <i className="bi bi-alarm red"></i>
          <h3>{dueSoonTasks}</h3>
          <p>Due Soon</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="content-card">
          <h5>Upcoming Deadlines</h5>

          {upcomingTasks.length === 0 ? (
            <p className="empty-message">No pending deadlines.</p>
          ) : (
            upcomingTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                date={`Due: ${task.deadline}`}
                status={task.status}
              />
            ))
          )}
        </div>

        <div className="content-card">
          <h5>Task Progress</h5>

          <div className="progress-circle">
            <h2>{progressPercentage}%</h2>
            <p>Completed</p>
          </div>

          <div className="progress-info">
            <p>
              <span className="dot green-bg"></span> Completed Tasks:{" "}
              {completedTasks}
            </p>

            <p>
              <span className="dot orange-bg"></span> Pending Tasks:{" "}
              {pendingTasks}
            </p>

            <p>
              <span className="dot purple-bg"></span> Total Tasks: {totalTasks}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;