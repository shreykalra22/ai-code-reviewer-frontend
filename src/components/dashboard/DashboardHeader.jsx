import {
  FiActivity,
  FiCalendar,
  FiCpu,
} from "react-icons/fi";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="mb-5 flex flex-wrap items-center gap-3">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <FiCpu />
              AI Analytics Dashboard
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              <FiActivity />
              System Online
            </span>

          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            Monitor AI-generated code reviews, track quality trends,
            analyze programming languages and improve code quality
            from one intelligent dashboard.
          </p>

        </div>

        {/* Right */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-lg">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
              <FiCalendar size={22} />
            </div>

            <div>

              <p className="text-sm text-slate-400">
                Today
              </p>

              <h3 className="font-semibold text-white">
                {today}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;