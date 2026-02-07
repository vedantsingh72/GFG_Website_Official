const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] 
                   animate-pulse duration-[10s]"
      />
      <div
        className="absolute 
                   w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] 
                   animate-pulse duration-[10s]"
      />
      <div
        className="absolute right-0 bottom-0 -translate-x-0 -translate-y-0
                   w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] 
                   animate-pulse duration-[10s]"
      />
      <div
        className="absolute -top-[10%] -right-[5%] 
                   w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px]"
      />
      <div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
                   opacity-20 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default Background;