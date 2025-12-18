import { stories } from "@/data/stories";

export default function StoriesPreview() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {stories.slice(0, 2).map((s) => (
        <article
          key={s.id}
          className="rounded-xl bg-white shadow-sm p-4 border border-slate-100"
        >
          <h4 className="font-semibold text-sm mb-1">{s.title}</h4>

          <p className="text-xs text-slate-500 mb-2">
            {s.personLabel}
            {s.dateApprox ? <span> • {s.dateApprox}</span> : null}
          </p>

          <p className="text-xs text-slate-600 mb-3">{s.excerpt}</p>

          <button className="text-xs font-semibold text-amber-700 hover:text-amber-800">
            قراءة القصة كاملة لاحقًا
          </button>

          {s.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}