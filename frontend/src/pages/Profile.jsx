import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";

function Profile() {
  const { currentUser } = useAuth();
  const { totalTasks, completedTasks, pendingTasks, dueSoonTasks } = useTasks();

  return (
    <section className="profile-page">
      <div className="page-title">
        <h2>Profile</h2>
        <p>View your account information and study activity.</p>
      </div>

      <div className="profile-grid">
        <div className="content-card profile-card">
          <div className="profile-avatar-large">
            {currentUser ? currentUser.name.charAt(0).toUpperCase() : "S"}
          </div>

          <h3>{currentUser ? currentUser.name : "Student"}</h3>
          <p>{currentUser ? currentUser.email : "student@email.com"}</p>

          <span className="student-badge">Student Account</span>
        </div>

        <div className="content-card">
          <h5>Account Details</h5>

          <div className="detail-row">
            <span>Full Name</span>
            <strong>{currentUser ? currentUser.name : "Student"}</strong>
          </div>

          <div className="detail-row">
            <span>Email Address</span>
            <strong>
              {currentUser ? currentUser.email : "student@email.com"}
            </strong>
          </div>

          <div className="detail-row">
            <span>Role</span>
            <strong>Student</strong>
          </div>

          <div className="detail-row">
            <span>Project</span>
            <strong>StudySync</strong>
          </div>
        </div>
      </div>

      <div className="content-card profile-stats-card">
        <h5>Study Activity Summary</h5>

        <div className="profile-stats-grid">
          <div className="profile-stat-box">
            <i className="bi bi-list-task purple"></i>
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="profile-stat-box">
            <i className="bi bi-check-circle green"></i>
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>

          <div className="profile-stat-box">
            <i className="bi bi-hourglass-split orange"></i>
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>

          <div className="profile-stat-box">
            <i className="bi bi-alarm red"></i>
            <h3>{dueSoonTasks}</h3>
            <p>Due Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;