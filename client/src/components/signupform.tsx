import { useState } from "react";
import { signup } from "../auth/auth";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {
  setMode?: (mode: "login" | "signup") => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await signup(name, email, password);
      if (res.success) {
        setMode?.("login"); 
        navigate("/login");
      }
    } catch (err: any) {
      setError(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full rounded-[28px] p-6 md:p-8">
      {/* Outer aura */}
      <div className="absolute inset-[-20px] rounded-[40px] blur-[120px] bg-emerald-500/25 -z-10" />

      {/* Card */}
      <div
        className="
          relative rounded-[28px] p-8
          bg-black/60 backdrop-blur-xl
          border border-emerald-500/40
          shadow-[0_0_60px_rgba(16,185,129,0.35), inset_0_0_25px_rgba(16,185,129,0.2)]
        "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold tracking-wide mb-1">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm">
            Join GFG RGIPT Student Chapter
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full px-5 py-3.5 rounded-full
              bg-black/70 border border-emerald-500/50
              text-white placeholder-gray-500
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_25px_rgba(16,185,129,0.7)]
              transition-all
            "
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-5 py-3.5 rounded-full
              bg-black/70 border border-emerald-500/50
              text-white placeholder-gray-500
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_25px_rgba(16,185,129,0.7)]
              transition-all
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full px-5 py-3.5 rounded-full pr-12
              bg-black/70 border border-emerald-500/50
              text-white placeholder-gray-500
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_25px_rgba(16,185,129,0.7)]
              transition-all
            "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 transition"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mb-4 text-center text-sm text-red-400">{error}</p>
        )}

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="
            w-full py-3.5 rounded-full
            bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400
            text-black font-semibold text-lg
            shadow-[0_0_40px_rgba(16,185,129,0.8)]
            hover:shadow-[0_0_70px_rgba(16,185,129,1)]
            hover:scale-[1.03] active:scale-[0.98]
            transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => setMode?.("login")}
            className="text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;