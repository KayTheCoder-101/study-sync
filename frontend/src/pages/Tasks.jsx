import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const {
    tasks,
    addTask,
    updateTask,
    markCompleted,
    markPending,
    deleteTask,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || subject === "" || deadline === "") {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      updateTask(editTaskId, title, subject, deadline);
      setIsEditing(false);
      setEditTaskId(null);
    } else {
      addTask(title, subject, deadline);
    }

    setTitle("");
    setSubject("");
    setDeadline("");
  };

  const startEdit = (task) => {
    setIsEditing(true);
    setEditTaskId(task.id);

    setTitle(task.title);
    setSubject(task.subject);
    setDeadline(task.deadline);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditTaskId(null);

    setTitle("");
    setSubject("");
    setDeadline("");
  };

  const filteredTasks = tasks.filter((task) => {
    const taskTitle = task.title.toLowerCase();
    const taskSubject = task.subject.toLowerCase();
    const search = searchText.toLowerCase();

    const matchesSearch =
      taskTitle.includes(search) || taskSubject.includes(search);

    const matchesFilter =
      filterStatus === "All" || task.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="tasks-page">
      <div className="page-title">
        <h2>My Tasks</h2>
        <p>Add, edit, search, filter, and track your assignments easily.</p>
      </div>

      <div className="task-layout">
        <div className="content-card">
          <h5>{isEditing ? "Edit Task" : "Add New Task"}</h5>

          <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                placeholder="Example: Complete React Project"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Example: Web Programming"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <button type="submit" className="primary-btn full-btn">
              <i
                className={
                  isEditing ? "bi bi-pencil-square" : "bi bi-plus-circle"
                }
              ></i>
              {isEditing ? "Update Task" : "Add Task"}
            </button>

            {isEditing && (
              <button
                type="button"
                className="cancel-btn"
                onClick={cancelEdit}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        <div className="content-card">
          <div className="task-list-header">
            <h5>Task List</h5>

            <span className="task-count">
              Showing {filteredTasks.length} of {tasks.length}
            </span>
          </div>

          <div className="task-tools">
            <div className="task-search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search by title or subject..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <select
              className="task-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="empty-message">No matching tasks found.</p>
          ) : (
            filteredTasks.map((task) => (
              <div className="new-task-card" key={task.id}>
                <div className="task-info">
                  <h6>{task.title}</h6>
                  <p>
                    <strong>Subject:</strong> {task.subject}
                  </p>
                  <p>
                    <strong>Deadline:</strong> {task.deadline}
                  </p>
                </div>

                <div className="task-actions">
                  <span
                    className={
                      task.status === "Completed"
                        ? "status completed"
                        : "status pending"
                    }
                  >
                    {task.status}
                  </span>

                  <button
                    className="edit-btn"
                    onClick={() => startEdit(task)}
                  >
                    Edit
                  </button>

                  {task.status === "Pending" ? (
                    <button
                      className="complete-btn"
                      onClick={() => markCompleted(task.id)}
                    >
                      Complete
                    </button>
                  ) : (
                    <button
                      className="pending-btn"
                      onClick={() => markPending(task.id)}
                    >
                      Pending
                    </button>
                  )}

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Tasks;