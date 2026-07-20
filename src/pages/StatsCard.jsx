const StatsCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20">

      <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

        <div className="text-5xl text-cyan-400">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatsCard;