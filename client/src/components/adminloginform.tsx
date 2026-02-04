import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../auth/auth";

const rgiptEmailRegex = /^\d{2}[a-zA-Z]{2}\d{4}@rgipt\.ac\.in$/;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = (): string | null => {
    if (!rgiptEmailRegex.test(email))
      return "Admin email must be like 24cs3063@rgipt.ac.in";
    if (!password) return "Password required";
    if (!adminSecret) return "Admin secret required";
    return null;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await adminLogin(email, password, adminSecret);
      navigate("/admin");
    } catch (err: any) {
      setError(err?.message || "Admin login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[500px] rounded-[28px] p-8 md:p-10">
      <div className="absolute inset-[-20px] rounded-[40px] blur-3xl bg-green-600/25 opacity-80 -z-10" />

      <div className="relative rounded-[28px] p-9 pb-10 bg-black/65 backdrop-blur-xl border border-green-500/55">
        <div className="text-center mb-7">
          <h2 className="text-green-400 font-bold text-3xl">
            GeeksforGeeks
          </h2>
          <p className="text-green-300/85">
            RGIPT Admin Panel
          </p>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-extrabold">
            Admin Login
          </h1>
          <p className="text-gray-400 text-sm">
            Authorized access only
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-6 py-4 rounded-full bg-black border border-green-500 text-white"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-black border border-green-500 text-white pr-14"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-green-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <input
            type="password"
            placeholder="Admin Secret Key"
            value={adminSecret}
            required
            onChange={(e) => setAdminSecret(e.target.value)}
            className="w-full mb-5 px-6 py-4 rounded-full bg-black border border-green-500 text-white"
          />

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-green-500 text-black font-bold"
          >
            {loading ? "Logging in..." : "Admin Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
