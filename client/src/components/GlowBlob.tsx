

function GlowBlob() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-green-500/30 font-sans">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] 
                          animate-pulse duration-[10s]"
        />
        <div
          className="absolute -top-[10%] -right-[5%] 
                          w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px]"
        />
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
                          opacity-10 mix-blend-overlay pointer-events-none"
        />
      </div>
    </div>
  );
}

export default GlowBlob;
