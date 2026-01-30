import { useState } from "react";
import { signup } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
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
        navigate("/login");
      }
    } catch (err: any) {
      setError(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[500px] rounded-[28px] p-8 md:p-10">
      {/* Strong outer green aura */}
      <div className="absolute inset-[-20px] rounded-[40px] blur-3xl bg-green-600/25 opacity-80 -z-10" />

      {/* Card */}
      <div
        className="
          relative rounded-[28px] p-9 pb-10
          bg-black/65 backdrop-blur-xl
          border border-green-500/55
          shadow-[0_0_90px_rgba(34,197,94,0.55), inset_0_0_30px_rgba(34,197,94,0.2)]
        "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-extrabold tracking-wide mb-1">
            Create Account
          </h1>
          <p className="text-gray-400/90 text-sm">
            Join GeeksforGeeks RGIPT Student Chapter
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-green-500/35 scale-110" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                relative w-full px-6 py-4 rounded-full
                bg-black/75 border border-green-500/80
                text-white placeholder-gray-500
                focus:outline-none focus:border-green-400
                focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
                shadow-[0_0_20px_rgba(34,197,94,0.45)]
              "
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-green-500/35 scale-110" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                relative w-full px-6 py-4 rounded-full
                bg-black/75 border border-green-500/80
                text-white placeholder-gray-500
                focus:outline-none focus:border-green-400
                focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
                shadow-[0_0_20px_rgba(34,197,94,0.45)]
              "
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-green-500/35 scale-110" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                relative w-full px-6 py-4 rounded-full pr-14
                bg-black/75 border border-green-500/80
                text-white placeholder-gray-500
                focus:outline-none focus:border-green-400
                focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
                shadow-[0_0_20px_rgba(34,197,94,0.45)]
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-300 text-xl"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="
            w-full py-4 rounded-full
            bg-gradient-to-r from-green-700 via-green-500 to-green-400
            text-white font-bold text-lg
            shadow-[0_0_50px_rgba(34,197,94,0.8)]
            hover:shadow-[0_0_80px_rgba(34,197,94,1)]
            hover:scale-105 active:scale-98
            transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {loading ? "Creating Account..." : "Signup"}
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-400 hover:text-green-300 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
