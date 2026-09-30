export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-md text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="btn btn-brand rounded-md">Explore Technologies</a>
          <a href="#about" className="btn btn-outline rounded-md border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">Learn More</a>
        </div>
      </div>

      {/* Layered "stack" illustration */}
      <div className="flex justify-center">
        <svg viewBox="0 0 320 300" className="w-full max-w-sm" role="img" aria-label="Layered development stack illustration">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff7a18" /><stop offset="50%" stopColor="#e91e8c" /><stop offset="100%" stopColor="#8b3fd9" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <polygon points="160,190 300,220 160,270 20,220" fill="url(#g2)" opacity="0.9" />
          <polygon points="160,130 290,160 160,210 30,160" fill="url(#g1)" opacity="0.75" />
          <polygon points="160,50 280,90 160,140 40,90" fill="#fff" stroke="url(#g1)" strokeWidth="4" />
          <text x="160" y="100" textAnchor="middle" fontSize="26" fontWeight="800" fill="#8b3fd9">Aa</text>
        </svg>
      </div>
    </section>
  );
}