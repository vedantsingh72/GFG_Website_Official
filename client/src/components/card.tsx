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
        relative w-[260px] cursor-pointer rounded-2xl p-6
        bg-black/60 backdrop-blur-xl
        border border-green-500/40
        shadow-[0_0_30px_rgba(34,197,94,0.25)]
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]
        group
      "
    >
      {/* Glow aura */}
      <div className="absolute inset-0 rounded-2xl blur-xl bg-green-500/20 opacity-0 group-hover:opacity-100 transition -z-10" />

      <h2 className="text-green-400 text-xl font-bold mb-2 tracking-wide">
        {title}
      </h2>

      <p className="text-gray-400 text-sm mb-5">
        {description}
      </p>

      <button
        className="
          px-4 py-2 rounded-lg
          bg-gradient-to-r from-green-700 via-green-500 to-green-400
          text-black font-semibold text-sm
          shadow-[0_0_20px_rgba(34,197,94,0.6)]
          group-hover:shadow-[0_0_35px_rgba(34,197,94,0.9)]
          transition
        "
      >
        Open
      </button>
    </div>
  );
};

export default Card;
