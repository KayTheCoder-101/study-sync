import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon">
          <i className="bi bi-exclamation-triangle"></i>
        </div>

        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          The page you are trying to open does not exist in StudySync.
        </p>

        <Link to="/" className="primary-btn not-found-btn">
          <i className="bi bi-house"></i>
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
}

export default NotFound;