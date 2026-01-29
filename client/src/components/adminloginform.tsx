import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../auth/auth";

const rgiptEmailRegex = /^\d{2}[a-zA-Z]{2}\d{4}@rgipt\.ac\.in$/;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if (!rgiptEmailRegex.test(email)) return "Admin email must be like 24cs3063@rgipt.ac.in";
    if (!password) return "Password required";
    if (!adminSecret) return "Admin secret required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    try {
      const res = await adminLogin(email, password, adminSecret);
      console.log("Admin logged in:", res);
      navigate("/admin");
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Admin Secret Key"
        value={adminSecret}
        onChange={(e) => setAdminSecret(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
    </form>
  );
};

export default AdminLogin;
