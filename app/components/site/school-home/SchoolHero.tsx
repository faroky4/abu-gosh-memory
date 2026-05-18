import Link from "next/link";

export default function SchoolHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/school-new.jpg')" }}
      />

      {/* Gradient overlay — heavier on the right (RTL text side) */}
      <div className="absolute inset-0 bg-gradient-to-l from-stone-950/92 via-stone-900/65 to-stone-900/20" />

      {/* Top fade for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-950/50 to-transparent" />

      {/* Main content — aligned to right bottom in RTL */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 w-full pb-32 sm:pb-52 pt-20">
          <div className="max-w-xl">

            {/* Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-400 mb-4 uppercase">
              مدرسة
            </p>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-5">
              أبو غوش الثانوية
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-stone-200 mb-4 leading-relaxed">
              بين الماضي والحاضر… نبني المستقبل
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-stone-300/90 leading-relaxed mb-9 max-w-sm">
              نحفظ ذاكرة المكان، ونلهم أجيال اليوم لنصنع غدًا أفضل.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#about"
                className="px-6 py-3 rounded-xl text-sm font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-150 shadow-lg shadow-amber-900/40"
              >
                تعرف على المدرسة
              </Link>
              <Link
                href="/heritage"
                className="px-6 py-3 rounded-xl text-sm font-bold border border-white/25 text-white hover:bg-white/10 transition-colors duration-150"
              >
                حكاية أبو غوش
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Floating quote card — lower left, desktop only */}
      <div className="hidden lg:block absolute bottom-52 left-12 z-20 w-64">
        <div className="bg-stone-900/65 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-4">
          <div className="w-5 h-5 rounded-full bg-amber-600/80 mb-3" />
          <p className="text-sm text-stone-100 leading-relaxed mb-3">
            &quot;إن تعلمت أن الفشل ما هو نهاية، هو بداية مختلفة.&quot;
          </p>
          <div className="h-px bg-white/12 mb-2" />
          <p className="text-xs text-stone-400">اقتباس تعليمي</p>
        </div>
      </div>

    </section>
  );
}
