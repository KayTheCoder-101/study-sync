function TaskCard({ title, date, status }) {
  return (
    <div className="task-card">
      <div>
        <h6>{title}</h6>
        <p>{date}</p>
      </div>

      <span className={status === "Completed" ? "status completed" : "status pending"}>
        {status}
      </span>
    </div>
  );
}

export default TaskCard;