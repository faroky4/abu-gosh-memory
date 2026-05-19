export default function MuseumHero() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(180,83,9,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-500/70 uppercase mb-8 select-none">
          مدرسة أبو غوش
        </p>

        <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
          متحف أبو غوش{" "}
          <span className="text-amber-500">الرقمي</span>
        </h1>

        <p className="text-lg sm:text-2xl xl:text-3xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-16">
          رحلة تفاعلية بين الماضي، الحاضر، والمستقبل.
        </p>

        <p className="text-sm sm:text-base text-stone-500 animate-pulse select-none">
          المس الشاشة للبدء
        </p>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-600 animate-bounce select-none" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
