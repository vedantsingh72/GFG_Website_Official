import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminSignup } from "../auth/auth";

const rgiptEmailRegex = /^\d{2}[a-zA-Z]{2}\d{4}@rgipt\.ac\.in$/;
const passwordChecks = {
  length: (s: string) => s.length >= 6,
  uppercase: (s: string) => /[A-Z]/.test(s),
  number: (s: string) => /[0-9]/.test(s),
  special: (s: string) => /[^A-Za-z0-9]/.test(s),
};

const AdminSignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (!name.trim()) return "Name is required";
    if (!rgiptEmailRegex.test(email)) return "Email must be like 24cs3063@rgipt.ac.in";
    if (!passwordChecks.length(password)) return "Password must be at least 6 characters";
    if (!passwordChecks.uppercase(password)) return "Password must contain one uppercase letter";
    if (!passwordChecks.number(password)) return "Password must contain one number";
    if (!passwordChecks.special(password)) return "Password must contain one special character";
    if (!adminSecret.trim()) return "Admin secret is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const v = validate();
    if (v) {
      setMessage(v);
      return;
    }
    setLoading(true);
    try {
      const data = await adminSignup(name, email, password, adminSecret);
      if (data && data.admin && data.admin.email) {
        setMessage("Admin signed up successfully: " + data.admin.email);
      } else {
        setMessage(data?.message || "Admin signed up successfully");
        console.warn("adminSignup returned unexpected shape:", data);
      }

      setName("");
      setEmail("");
      setPassword("");
      setAdminSecret("");

      navigate("/admin/login");
    } catch (err: any) {
      setMessage(err?.message || "Admin signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Admin Secret:</label>
          <input
            type="password"
            value={adminSecret}
            onChange={(e) => setAdminSecret(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Signup as Admin"}
        </button>
      </form>

      {message && <p style={{ color: message.includes("successfully") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default AdminSignupForm;
