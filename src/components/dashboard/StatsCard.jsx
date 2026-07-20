const StatsCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20">

      {/* Glow Effect */}
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400 text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatsCard;