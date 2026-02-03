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


type AdminSignupProps = {
  setMode: (value: "login" | "signup") => void;
};


const AdminSignupForm = ({ setMode }: AdminSignupProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = (): string | null => {
    if (!name.trim()) return "Name is required";
    if (!rgiptEmailRegex.test(email))
      return "Email must be like 24cs3063@rgipt.ac.in";
    if (!passwordChecks.length(password))
      return "Password must be at least 6 characters";
    if (!passwordChecks.uppercase(password))
      return "Password must contain one uppercase letter";
    if (!passwordChecks.number(password))
      return "Password must contain one number";
    if (!passwordChecks.special(password))
      return "Password must contain one special character";
    if (!adminSecret.trim()) return "Admin secret is required";
    return null;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setMessage(null);

    const validationError = validate();
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setLoading(true);
    try {
      await adminSignup(name, email, password, adminSecret);
      setMessage("Admin signed up successfully");
      setMode("login");
    } catch (err: any) {
      setMessage(err?.message || "Admin signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[500px] rounded-[28px] p-8 md:p-10">
      {/* Outer glow */}
      <div className="absolute inset-[-20px] rounded-[40px] blur-3xl bg-green-600/25 opacity-80 -z-10" />

      {/* Card */}
      <div className="relative rounded-[28px] p-9 pb-10 bg-black/65 backdrop-blur-xl border border-green-500/55">
        {/* Header */}
        <div className="text-center mb-7">
          <h2 className="text-green-400 font-bold text-3xl">
            GeeksforGeeks
          </h2>
          <p className="text-green-300/85">
            RGIPT Admin Signup
          </p>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-extrabold">
            Create Admin Account
          </h1>
          <p className="text-gray-400 text-sm">
            Restricted access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Admin Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500 text-white placeholder-gray-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500 text-white placeholder-gray-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500 text-white placeholder-gray-500"
          />

          {/* Admin Secret */}
          <input
            type="password"
            placeholder="Admin Secret Key"
            value={adminSecret}
            required
            onChange={(e) => setAdminSecret(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500 text-white placeholder-gray-500"
          />

          {/* Message */}
          {message && (
            <p
              className={`text-sm text-center ${
                message.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-4 rounded-full
              bg-gradient-to-r from-green-700 via-green-500 to-green-400
              text-white font-bold text-lg
              shadow-[0_0_50px_rgba(34,197,94,0.8)]
              hover:shadow-[0_0_80px_rgba(34,197,94,1)]
              hover:scale-105 active:scale-98
              transition-all duration-200
              disabled:opacity-60 disabled:hover:scale-100
            "
          >
            {loading ? "Signing up..." : "Signup as Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupForm;
