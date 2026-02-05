import RealGfgJoin from "../components/realgfgjoin";

const RealJoinPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-30">
        {/* Upper Hero */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Join <span className="text-emerald-400">GFG RGIPT</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Become a part of the GeeksforGeeks Student Chapter at RGIPT.  
            Build real-world projects, learn from mentors, and grow with a focused tech community.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto max-w-xl rounded-2xl border border-emerald-500/20 bg-black/70 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.25)]">
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Application Form
          </h2>

          <RealGfgJoin />
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-sm text-emerald-400">
          Shortlisted candidates may be invited for a short interaction round.
        </p>
      </div>
    </div>
  );
};

export default RealJoinPage;