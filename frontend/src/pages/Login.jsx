import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Welcome back to StudySync</p>

        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>

        <p className="auth-link">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;