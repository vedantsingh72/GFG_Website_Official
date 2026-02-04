import { useState } from "react";
import AdminLogin from "../components/adminloginform";
import AdminSignupForm from "../components/adminsigunform";

const AdminMain = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-gradient-to-br from-black via-gray-900 to-black
        relative overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* Card container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`
              px-6 py-2 rounded-full text-sm font-semibold
              border transition-all
              ${
                mode === "login"
                  ? "bg-green-500 text-black border-green-500"
                  : "border-green-500/40 text-green-400 hover:bg-green-500/10"
              }
            `}
          >
            Admin Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`
              px-6 py-2 rounded-full text-sm font-semibold
              border transition-all
              ${
                mode === "signup"
                  ? "bg-green-500 text-black border-green-500"
                  : "border-green-500/40 text-green-400 hover:bg-green-500/10"
              }
            `}
          >
            Admin Signup
          </button>
        </div>

          {mode === "login" ? (
          <AdminLogin/>
        ) : (
          <AdminSignupForm setMode={setMode} />
        )}

      </div>
    </div>
  );
};

export default AdminMain;
