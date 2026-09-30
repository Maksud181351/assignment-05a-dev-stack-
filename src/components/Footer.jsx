const groups = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-xs text-white">DS</span>
            Dev <span className="text-brand">Stack</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-medium">
            {["GitHub", "Twitter", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="hover:text-pink-600">{s}</a>
            ))}
          </div>
        </div>
        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-xs font-bold tracking-wide">{title.toUpperCase()}</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {items.map((i) => (<li key={i}><a href="#" className="hover:text-pink-600">{i}</a></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-slate-100 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}