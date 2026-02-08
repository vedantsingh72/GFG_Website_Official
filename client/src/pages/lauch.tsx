import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Countdown from "react-countdown";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";


const SafeConfetti = Confetti as unknown as FC<any>;
const SafeCountdown = Countdown as unknown as FC<any>;


const fireSideCannons = () => {
  const end = Date.now() + 1200; 
  const colors = ["#22c55e", "#00ff88", "#34d399", "#a7f3d0"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      startVelocity: 55,
      origin: { x: 0, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      startVelocity: 55,
      origin: { x: 1, y: 0.6 },
      colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
};

const Launch: FC = () => {
  const [startCountdown, setStartCountdown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,136,0.15),_transparent_45%)]" />

      {/* Confetti */}
      {showConfetti && <SafeConfetti recycle={false} numberOfPieces={900} />}

      {/* Initial Screen with Premium Hero */}
{!startCountdown && (
  <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
    {/* Ambient glow rings */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-2xl" />
    </div>

    {/* Glass card */}
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-2xl rounded-3xl border border-emerald-400/30 bg-black/60 p-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,136,0.25)]"
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-300"
      >
        Official Launch
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-400 sm:text-4xl md:text-5xl"
      >
        GFG RGIPT Student Chapter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mx-auto mt-3 max-w-xl text-sm text-emerald-200/80 sm:text-base"
      >
        Learn. Build. Compete. Connect with the developer community at RGIPT.
      </motion.p>

      {/* CTA */}
      <div className="mt-8 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setStartCountdown(true)}
          className="group relative overflow-hidden rounded-2xl bg-emerald-400 px-10 py-4 text-base font-semibold text-black shadow-[0_0_28px_rgba(0,255,136,0.6)]"
        >
          {/* shimmer */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10 flex items-center gap-2">
             Launch Platform
          </span>
        </motion.button>
      </div>
    </motion.div>

    {/* Subtle footer hint */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-6 text-xs tracking-widest text-emerald-300/60"
    >
      Powered by GFG RGIPT
    </motion.div>
  </div>
)}



      {/* Countdown Overlay */}
      <AnimatePresence>
        {startCountdown && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SafeCountdown
              date={Date.now() + 3000} // ⏳ 3 seconds
              renderer={({ seconds, completed }: any) => {
                if (completed) {
                  navigate("/"); // 🚀 redirect to home
                  return null;
                }

                // 🎉 Trigger celebration at 3 seconds (once)
                if (seconds === 3 && !triggered) {
                  setTriggered(true);
                  setShowConfetti(true);
                  fireSideCannons();
                  setTimeout(() => setShowConfetti(false), 1200);
                }

                return (
                  <div className="relative flex flex-col items-center text-center">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 text-3xl font-bold text-emerald-400"
                    >
                      GFG RGIPT Student Chapter
                    </motion.h1>

                    <motion.div
                      key={seconds}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="text-[120px] font-extrabold text-emerald-400 drop-shadow-[0_0_35px_rgba(0,255,136,0.9)]"
                    >
                      {seconds}
                    </motion.div>

                    <p className="mt-3 text-sm tracking-widest text-gray-400 uppercase">
                      Redirecting to Home…
                    </p>
                  </div>
                );
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Launch;