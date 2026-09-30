const badgeColors = {
  Popular: "bg-sky-50 text-sky-600", Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-500", "SSR / Edge": "bg-purple-50 text-purple-600",
  Standard: "bg-green-50 text-green-600", "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-red-50 text-red-500", Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-sky-50 text-sky-600", Robust: "bg-emerald-50 text-emerald-600",
  Modern: "bg-cyan-50 text-cyan-600", Containers: "bg-sky-50 text-sky-600",
};

export default function TechCard({ tech, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-8 w-8 object-contain" />
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${badgeColors[badge] || "bg-slate-100 text-slate-600"}`}>
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold">{name}</h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{description}</p>
      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3 text-[11px] text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-0.5 font-medium">{category}</span>
        <span>{difficulty}</span>
        <span className="font-semibold text-slate-700"><span className="text-amber-400">★</span> {rating}</span>
      </div>
      <button onClick={() => onAdd(tech)} className="btn mt-4 w-full rounded-lg border-0 bg-[#0b1120] text-sm font-semibold text-white hover:bg-slate-700">
        Add to Stack
      </button>
    </article>
  );
}