import Link from "next/link";

export default function SchoolHero() {
  return (
    <section
      className="border-b bg-gradient-to-b from-amber-50/60 via-stone-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
        {/* Location badge */}
        <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full mb-8">
          <span>📍</span>
          <span>أبو غوش </span>
        </p>

        {/* School name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-stone-900 mb-5">
          مدرسة أبو غوش الثانوية
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-800 mb-6">
          بين الماضي والحاضر… نبني المستقبل
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto mb-10">
          نحفظ ذاكرة المكان، ونلهم أجيال اليوم لنصنع معًا غدًا أفضل.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#stats"
            className="px-7 py-3 rounded-full text-sm sm:text-base font-semibold bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-150 shadow-sm"
          >
            تعرف على المدرسة
          </Link>
          <Link
            href="/heritage"
            className="px-7 py-3 rounded-full text-sm sm:text-base font-semibold border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white transition-colors duration-150"
          >
            حكاية أبو غوش
          </Link>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-24 bg-stone-200" />
          <span className="text-amber-300 text-lg">⬥</span>
          <div className="h-px flex-1 max-w-24 bg-stone-200" />
        </div>
      </div>
    </section>
  );
}
