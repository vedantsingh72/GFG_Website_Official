import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="
        group relative w-[360px] min-h-[260px]
        cursor-pointer rounded-2xl p-[2px]
        bg-gradient-to-br from-green-400/40 via-green-600/30 to-emerald-400/40
        transition-all duration-500
        hover:scale-[1.06]
      "
    >
      {/* Card body */}
      <div
        className="
          relative h-full rounded-2xl p-8
          bg-black/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(34,197,94,0.25)]
          group-hover:shadow-[0_0_80px_rgba(34,197,94,0.7)]
          transition-all duration-500
          flex flex-col justify-between
        "
      >
        {/* Neon sweep */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-transparent via-green-400/10 to-transparent
            opacity-0 group-hover:opacity-100
            animate-[shine_1.5s_linear_infinite]
            pointer-events-none
          "
        />

        <div>
          <h2 className="text-green-400 text-2xl font-semibold tracking-wide mb-3">
            {title}
          </h2>

          <p className="text-gray-400 text-base leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className="
            mt-8 self-start
            px-5 py-2.5 rounded-lg
            bg-gradient-to-r from-green-600 via-green-500 to-emerald-400
            text-black font-semibold text-sm
            shadow-[0_0_20px_rgba(34,197,94,0.6)]
            transition-all duration-300
            hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]
            hover:translate-x-1
          "
        >
          Open →
        </button>
      </div>
    </div>
  );
};

export default Card;
