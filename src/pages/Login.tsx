import { useState } from "react";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "test" && password === "123") {
      localStorage.setItem("isLoggin", "true");
      navigate("/");
    } else {
      alert("Silahkan login dengan username: test, passord: 123");
      navigate("/login");
    }
  };

  return (
    <Layout isHeader={false}>
      <div className="login">
        <div className="login-container">
          <h2 className="mb-2">Login</h2>
          <div className="mb-2 login-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-2 login-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
