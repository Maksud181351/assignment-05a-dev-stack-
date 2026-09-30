const links = ["Home", "Technologies", "Projects", "About", "Contact"];

const Logo = () => (
  <a href="#home" className="flex items-center gap-2 font-bold text-lg">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-xs font-bold text-white">DS</span>
    <span className="hidden sm:inline">Dev <span className="text-brand">Stack</span></span>
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        {/* Mobile: hamburger on the left */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} aria-label="Open menu" className="btn btn-ghost btn-square btn-sm text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-white p-2 shadow-lg">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Logo: centre on mobile, left on desktop */}
        <div className="flex justify-center lg:justify-start"><Logo /></div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map((l, i) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className={i === 0 ? "text-pink-600" : "hover:text-pink-600"}>{l}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button className="text-xs font-medium text-slate-700 hover:text-pink-600 sm:text-sm">Sign In</button>
          <button className="btn btn-brand btn-sm rounded-full px-4 sm:px-5">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}