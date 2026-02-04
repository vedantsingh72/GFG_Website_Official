import { useState } from "react";
import { login } from "../auth/auth";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../components/googleButton";

interface LoginFormProps {
  setMode?: (mode: "login" | "signup") => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.accessToken && res.user) {
        loginUser(res.accessToken, res.user);
        navigate("/home");
      }
    } catch (err: any) {
      setError(err?.message || "Login failed");
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
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">
            Login to GFG RGIPT Student Chapter
          </p>
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
        <div className="mb-4 relative">
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

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-5 px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 accent-emerald-500"
            />
            Remember me
          </label>
          <button className="text-emerald-400 hover:text-emerald-300 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mb-4 text-center text-sm text-red-400">{error}</p>
        )}

        {/* Login button */}
        <button
          onClick={handleLogin}
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
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* OR */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-emerald-500/30" />
          <span className="px-5 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-emerald-500/30" />
        </div>

        {/* Google */}
        <GoogleButton />

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <button
            onClick={() => setMode?.("signup")}
            className="text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;