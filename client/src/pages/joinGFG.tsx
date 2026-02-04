import { useState } from "react";
import Loginform from "../components/loginform";
import SignupForm from "../components/signupform";

const JoinGFG = () => {
  const [mode, setMode] = useState<"login" | "signup">("signup");

  return (
    // pushes content below fixed navbar
    <section className="min-h-screen w-full bg-black text-white pt-32 pb-24 relative overflow-hidden px-6 flex items-start justify-center">
      
      {/* Subtle ambient glow (black stays dominant) */}
      <div className="absolute w-[560px] h-[560px] bg-green-500/5 blur-[220px] rounded-full -top-48 -left-48" />
      <div className="absolute w-[560px] h-[560px] bg-green-500/5 blur-[220px] rounded-full -bottom-48 -right-48" />

      {/* Vignette overlay for deeper black edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Glass container */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(34,197,94,0.18)]">
        
        {/* Heading */}
        <h1 className="text-3xl font-black text-center mb-6">
          Join <span className="text-green-400">GFG RGIPT</span>
        </h1>

        {/* Toggle */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setMode("login")}
            className={`
              group relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold 
              transition-all duration-300 active:scale-95
              ${
                mode === "login"
                  ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.7)]"
                  : "border border-white/10 text-gray-300 hover:text-green-400 hover:border-green-500/40"
              }
            `}
          >
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10" />
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`
              group relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold 
              transition-all duration-300 active:scale-95
              ${
                mode === "signup"
                  ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.7)]"
                  : "border border-white/10 text-gray-300 hover:text-green-400 hover:border-green-500/40"
              }
            `}
          >
            <span className="relative z-10">Signup</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10" />
          </button>
        </div>

        {/* Forms */}
        <div className="relative">
          {mode === "login" ? (
            <Loginform setMode={setMode} />
          ) : (
            <SignupForm setMode={setMode} />
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinGFG;