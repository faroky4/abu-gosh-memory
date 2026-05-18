const teams = [
  {
    initial: "ت",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-700",
    accentBg: "bg-amber-500",
    title: "فريق التوثيق",
    subtitle: "جمع القصص والصور",
    description:
      "يعمل الطلاب على جمع صور قديمة وقصص من العائلات وكبار السن في البلدة.",
    tag: "تراث",
    tagClass: "bg-amber-100 text-amber-700",
  },
  {
    initial: "م",
    avatarBg: "bg-stone-100",
    avatarText: "text-stone-600",
    accentBg: "bg-stone-400",
    title: "فريق المقابلات",
    subtitle: "الاستماع إلى كبار السن",
    description:
      "يتعلم الطلاب كيف يطرحون الأسئلة، يوثقون الروايات، ويحفظون الذاكرة الشفوية.",
    tag: "مجتمع",
    tagClass: "bg-stone-100 text-stone-600",
  },
  {
    initial: "ك",
    avatarBg: "bg-stone-800",
    avatarText: "text-white",
    accentBg: "bg-stone-700",
    title: "فريق التكنولوجيا",
    subtitle: "بناء الموقع والمتحف الرقمي",
    description:
      "يتعرف الطلاب تدريجيًا على عالم البرمجة وبناء المواقع من خلال مشروع حقيقي.",
    tag: "تقنية",
    tagClass: "bg-stone-100 text-stone-700",
  },
];

export default function StudentImpact() {
  return (
    <section id="students" className="bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4">
            الطلاب
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
            الطلاب يصنعون الفرق
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl leading-relaxed">
            من خلال البحث، المقابلات، التصوير، والتكنولوجيا، يتحول الطلاب إلى
            صانعي محتوى ومعرفة.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-6">
          {teams.map((team) => (
            <div
              key={team.title}
              className="rounded-2xl border border-stone-100 bg-white shadow-sm hover:-translate-y-1 transition-transform duration-200 flex flex-col"
            >
              {/* Colored accent strip */}
              <div className={`h-1 rounded-t-2xl shrink-0 ${team.accentBg}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shrink-0 ${team.avatarBg} ${team.avatarText}`}
                >
                  {team.initial}
                </div>

                {/* Title + subtitle */}
                <h3 className="text-base font-bold text-stone-900 mb-1">
                  {team.title}
                </h3>
                <p className="text-xs font-medium text-stone-400 mb-4">
                  {team.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-stone-500 leading-relaxed flex-1">
                  {team.description}
                </p>

                {/* Tag */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${team.tagClass}`}
                  >
                    {team.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl bg-stone-900 px-6 sm:px-8 py-5 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm shrink-0">
            ◈
          </div>
          <p className="text-sm text-stone-300 leading-snug">
            <span className="font-semibold text-white">المرحلة القادمة:</span>{" "}
            مسار لتعليم البرمجة وبناء المواقع داخل المدرسة
          </p>
        </div>

      </div>
    </section>
  );
}
