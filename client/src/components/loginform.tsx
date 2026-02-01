import { useState } from "react";
import { login } from "../auth/auth";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../components/googleButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

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
    <div className="relative w-[500px] rounded-[28px] p-8 md:p-10">
      {/* Stronger outer green aura / vignette */}
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
        {/* Top logo section – matches reference style */}
        <div className="text-center mb-7">
          <div className="flex flex-col items-center gap-1">
            {/* GfG icon – green stack/leaf style */}
            <div className="relative mb-1">
              <div className="absolute inset-0 bg-green-500/40 rounded-full blur-xl scale-150" />
              <svg
                className="w-14 h-14 text-green-400 relative"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                <path d="M7 9.5l5 3 5-3" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-green-400 font-bold text-3xl tracking-tight leading-none">
              GeeksforGeeks
            </h2>
            <p className="text-green-300/85 text-base font-medium -mt-1">
              RGIPT Student Chapter
            </p>
          </div>
        </div>

        {/* Title block – bolder & more compact */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-extrabold tracking-wide mb-1">
            GeeksforGeeks RGIPT
          </h1>
          <p className="text-gray-400/90 text-sm">
            Student Chapter Login Portal
          </p>
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
                focus:outline-none focus:border-green-400 focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
                shadow-[0_0_20px_rgba(34,197,94,0.45)]
              "
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5">
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
                focus:outline-none focus:border-green-400 focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
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

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm text-gray-300 mb-7 px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 accent-green-500"
            />
            Remember Me
          </label>
          <a href="#" className="text-green-400 hover:text-green-300 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="
            w-full py-4 rounded-full
            bg-gradient-to-r from-green-700 via-green-500 to-green-400
            text-white font-bold text-lg
            shadow-[0_0_50px_rgba(34,197,94,0.8)]
            hover:shadow-[0_0_80px_rgba(34,197,94,1)]
            hover:scale-105 active:scale-98
            transition-all duration-200
          "
        >
          Login
        </button>

        {/* OR */}
        <div className="flex items-center my-7">
          <div className="flex-1 h-px bg-green-500/35" />
          <span className="px-6 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-green-500/35" />
        </div>

        {/* Google */}
        <GoogleButton />
      </div>
    </div>
  );
};

export default LoginForm;