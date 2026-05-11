const stats = [
  { value: "+1200", label: "طالب وطالبة" },
  { value: "85", label: "معلم ومعلمة" },
  { value: "35", label: "سنة من التعليم" },
  { value: "+3500", label: "خريج وخريجة" },
];

export default function SchoolStats() {
  return (
    <section id="stats" className="bg-stone-900 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section label */}
        <p className="text-center text-xs sm:text-sm font-semibold tracking-widest text-amber-500 mb-10">
          المدرسة بالأرقام
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center px-4 py-7 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 mb-2 leading-none">
                {s.value}
              </p>
              <p className="text-sm sm:text-base text-stone-300 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
