import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const result = await login(email, password);

    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <i className="bi bi-journal-check"></i>
          <span>StudySync</span>
        </div>

        <h2>Login</h2>
        <p>Welcome back to StudySync</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-link">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;