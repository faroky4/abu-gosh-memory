export default function NewsHero() {
  return (
    <section className="bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest bg-amber-100 text-amber-700 mb-7 uppercase">
          الأخبار
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5 leading-tight">
          أخبار المدرسة
        </h1>
        <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
          آخر النشاطات، المبادرات، والمشاريع داخل مدرسة أبو غوش الثانوية.
        </p>
      </div>
    </section>
  );
}
