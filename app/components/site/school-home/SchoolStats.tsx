const stats = [
  { icon: "🎓", value: "+1200", label: "طالب وطالبة" },
  { icon: "📚", value: "85", label: "معلم ومعلمة" },
  { icon: "⭐", value: "35", label: "سنة من التعليم" },
  { icon: "🏆", value: "+3500", label: "خريج وخريجة" },
];

export default function SchoolStats() {
  return (
    <div id="stats" className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-8 pb-2">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-100/80">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center py-8 px-4 sm:px-6 ${
                  i < stats.length - 1 ? "border-l border-stone-100" : ""
                }`}
              >
                {/* Icon circle */}
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-lg mb-3">
                  {s.icon}
                </div>

                {/* Number */}
                <p className="text-3xl sm:text-4xl font-bold text-stone-900 leading-none mb-1.5">
                  {s.value}
                </p>

                {/* Label */}
                <p className="text-xs sm:text-sm text-stone-500 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
