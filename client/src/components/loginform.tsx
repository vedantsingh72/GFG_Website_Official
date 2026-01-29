import { useState } from "react";
import { login } from "../auth/auth";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";
import GoogleButton from "./googleButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      if (res.accessToken && res.user) {
        loginUser(res.accessToken, res.user);
        navigate("/home");
      }
    } catch (err: any) {
      alert(err?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <GoogleButton />
    </div>
  );
};

export default LoginForm;
