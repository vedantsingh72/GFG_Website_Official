import { useState } from "react";
import AdminLogin from "../components/adminloginform";
import AdminSignupForm from "../components/adminsigunform";

const AdminMain = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    // pt-32 pushes content below fixed navbar
    <section className="min-h-screen w-full bg-black text-white pt-32 pb-24 relative overflow-hidden px-6 flex items-start justify-center">
      
      {/* Ambient green glow (project theme) */}
      <div className="absolute w-[520px] h-[520px] bg-green-500/20 blur-[140px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[520px] h-[520px] bg-green-500/10 blur-[140px] rounded-full -bottom-40 -right-40" />

      {/* Glass container */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(34,197,94,0.18)]">
        
        {/* Heading */}
        <h1 className="text-3xl font-black text-center mb-6">
          Admin <span className="text-green-400">Panel</span>
        </h1>

        {/* Toggle */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setMode("login")}
            className={`
              px-5 py-2 rounded-full text-sm font-semibold transition-all border
              ${
                mode === "login"
                  ? "bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.7)]"
                  : "border-white/10 text-gray-300 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10"
              }
            `}
          >
            Admin Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`
              px-5 py-2 rounded-full text-sm font-semibold transition-all border
              ${
                mode === "signup"
                  ? "bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.7)]"
                  : "border-white/10 text-gray-300 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10"
              }
            `}
          >
            Admin Signup
          </button>
        </div>

        {/* Forms */}
        {mode === "login" ? <AdminLogin /> : <AdminSignupForm setMode={setMode} />}
      </div>
    </section>
  );
};

export default AdminMain;