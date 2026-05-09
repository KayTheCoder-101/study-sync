function Settings() {
  return (
    <section className="settings-page">
      <div className="page-title">
        <h2>Settings</h2>
        <p>Manage simple preferences for your StudySync account.</p>
      </div>

      <div className="settings-grid">
        <div className="content-card">
          <h5>Notification Settings</h5>

          <div className="setting-row">
            <div>
              <h6>Deadline Reminders</h6>
              <p>Show alerts for upcoming assignment deadlines.</p>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div>
              <h6>Task Completion Alerts</h6>
              <p>Show confirmation when a task is completed.</p>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div>
              <h6>Email Notifications</h6>
              <p>Email reminders will be added after backend integration.</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="content-card">
          <h5>Application Preferences</h5>

          <div className="preference-box">
            <label>Default Task Status</label>
            <select>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="preference-box">
            <label>Dashboard View</label>
            <select>
              <option>Summary View</option>
              <option>Detailed View</option>
            </select>
          </div>

          <div className="preference-box">
            <label>Theme</label>
            <select>
              <option>Light Theme</option>
              <option>Dark Theme Coming Soon</option>
            </select>
          </div>
        </div>
      </div>

      <div className="content-card project-info-card">
        <h5>Project Information</h5>

        <p>
          <strong>Project Name:</strong> StudySync – Smart Task & Assignment
          Manager
        </p>

        <p>
          <strong>Frontend:</strong> React.js, Bootstrap, React Router
        </p>

        <p>
          <strong>Backend:</strong> Node.js, Express.js, MongoDB will be added
          next.
        </p>

        <p>
          <strong>Purpose:</strong> To help students manage assignments,
          deadlines, reminders, and progress.
        </p>
      </div>
    </section>
  );
}

export default Settings;