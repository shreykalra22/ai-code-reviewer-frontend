import { ArrowRight, Bot, Sparkles, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            <Sparkles size={18} />
            Powered by Google Gemini AI
          </div>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Review Your Code
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Smarter. Faster. Better.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Instantly analyze your source code with AI, detect bugs,
            improve readability, receive optimization suggestions,
            and generate production-ready improvements in seconds.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#review-form"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              Start Reviewing
              <ArrowRight size={18} />
            </a>

            <button
              className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-white"
            >
              Learn More
            </button>

          </div>

          <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

              <Bot
                className="mx-auto mb-4 text-cyan-400"
                size={42}
              />

              <h3 className="text-xl font-semibold text-white">
                AI Powered
              </h3>

              <p className="mt-3 text-slate-400">
                Analyze code using Google Gemini AI with intelligent
                explanations and improvements.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

              <Sparkles
                className="mx-auto mb-4 text-cyan-400"
                size={42}
              />

              <h3 className="text-xl font-semibold text-white">
                Quality Analysis
              </h3>

              <p className="mt-3 text-slate-400">
                Detect bad practices, improve readability,
                maintainability and overall code quality.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

              <ShieldCheck
                className="mx-auto mb-4 text-cyan-400"
                size={42}
              />

              <h3 className="text-xl font-semibold text-white">
                Production Ready
              </h3>

              <p className="mt-3 text-slate-400">
                Get optimized code suggestions following
                modern development standards.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;