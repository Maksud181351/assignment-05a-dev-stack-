export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-bold">Your Stack</h3>
      <p className="text-xs text-slate-400">{stack.length} Technology Selected</p>

      {stack.length === 0 ? (
        <p className="mt-5 rounded-lg bg-slate-50 p-4 text-center text-xs text-slate-500">
          Your stack is empty. Add a technology from the list to get started.
        </p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {stack.map((item) => (
              <li key={item.id} className="flex items-center gap-3 rounded-lg border border-slate-100 p-2">
                <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                <div className="flex-1 leading-tight">
                  <p className="text-xs font-semibold">{item.name}</p>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
                <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`} className="px-1 text-slate-400 hover:text-red-500">✕</button>
              </li>
            ))}
          </ul>
          <button onClick={onRemoveAll} className="btn btn-sm mt-5 w-full border-red-200 bg-white font-semibold text-red-500 hover:bg-red-50">
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}