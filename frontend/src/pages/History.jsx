import { useTasks } from "../context/TaskContext";

function History() {
  const { tasks, taskLoading } = useTasks();

  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const pendingTasks = tasks.filter((task) => task.status === "Pending");

  const recentTasks = [...tasks].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return "No date";
    }

    const date = new Date(dateValue);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="history-page">
      <div className="page-title">
        <h2>Task History</h2>
        <p>Review your recent, completed, and pending academic tasks.</p>
      </div>

      <div className="history-summary-grid">
        <div className="history-summary-card">
          <i className="bi bi-clock-history purple"></i>
          <h3>{tasks.length}</h3>
          <p>Total History</p>
        </div>

        <div className="history-summary-card">
          <i className="bi bi-check-circle green"></i>
          <h3>{completedTasks.length}</h3>
          <p>Completed Tasks</p>
        </div>

        <div className="history-summary-card">
          <i className="bi bi-hourglass-split orange"></i>
          <h3>{pendingTasks.length}</h3>
          <p>Pending Tasks</p>
        </div>
      </div>

      <div className="history-grid">
        <div className="content-card">
          <h5>Recent Activity</h5>

          {taskLoading ? (
            <p className="empty-message">Loading history...</p>
          ) : recentTasks.length === 0 ? (
            <p className="empty-message">No task history available.</p>
          ) : (
            recentTasks.map((task) => (
              <div className="history-item" key={task._id}>
                <div className="history-icon">
                  <i
                    className={
                      task.status === "Completed"
                        ? "bi bi-check-circle"
                        : "bi bi-hourglass-split"
                    }
                  ></i>
                </div>

                <div className="history-content">
                  <h6>{task.title}</h6>

                  <p>
                    <strong>Subject:</strong> {task.subject}
                  </p>

                  <p>
                    <strong>Deadline:</strong> {task.deadline}
                  </p>

                  <p>
                    <strong>Created:</strong> {formatDate(task.createdAt)}
                  </p>
                </div>

                <span
                  className={
                    task.status === "Completed"
                      ? "status completed"
                      : "status pending"
                  }
                >
                  {task.status}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="content-card">
          <h5>Completed Tasks</h5>

          {taskLoading ? (
            <p className="empty-message">Loading completed tasks...</p>
          ) : completedTasks.length === 0 ? (
            <p className="empty-message">No completed tasks yet.</p>
          ) : (
            completedTasks.map((task) => (
              <div className="small-history-card" key={task._id}>
                <h6>{task.title}</h6>
                <p>{task.subject}</p>
                <span>Completed</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default History;