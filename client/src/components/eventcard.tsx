import ElectricBorder from "./ElectricBorder";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string; 
  tag?: string;
}

const EventCard = ({
  title,
  date,
  description,
  imageUrl,
  tag = "Upcoming",
}: EventCardProps) => {
  return (
    <ElectricBorder color="#22c55e" className="rounded-2xl p-[2px] max-w-sm">
      <div className="group relative overflow-hidden rounded-2xl bg-slate-950/90 text-slate-200 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,197,94,0.2)]">
        {/* Image */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Tag */}
          <span className="absolute left-3 top-3 rounded-full border border-emerald-400/50 bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur">
            {tag}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-lg font-bold tracking-wide text-slate-50">
            {title}
          </h3>

          <p className="text-xs text-slate-400">{date}</p>

          <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">
            {description}
          </p>

          <button className="mt-2 inline-flex w-fit items-center gap-1 rounded-lg border border-emerald-400/40 px-3 py-1.5 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-400/15 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]">
            View Details →
          </button>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default EventCard;
