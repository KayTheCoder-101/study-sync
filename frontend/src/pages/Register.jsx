import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Register yourself to manage study tasks</p>

        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Create password" />

          <button type="submit">Register</button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;