interface TeamItem {
  initial: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

interface ImpactDict {
  badge: string;
  title: string;
  subtitle: string;
  teams: TeamItem[];
  ctaLabel: string;
  ctaText: string;
}

const TEAM_STYLES = [
  {
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-700",
    accentBg: "bg-amber-500",
    tagClass: "bg-amber-100 text-amber-700",
  },
  {
    avatarBg: "bg-stone-100",
    avatarText: "text-stone-600",
    accentBg: "bg-stone-400",
    tagClass: "bg-stone-100 text-stone-600",
  },
  {
    avatarBg: "bg-stone-800",
    avatarText: "text-white",
    accentBg: "bg-stone-700",
    tagClass: "bg-stone-100 text-stone-700",
  },
];

const defaultDict: ImpactDict = {
  badge: "الطلاب",
  title: "الطلاب يصنعون الفرق",
  subtitle: "من خلال البحث، المقابلات، التصوير، والتكنولوجيا، يتحول الطلاب إلى صانعي محتوى ومعرفة.",
  teams: [
    {
      initial: "ت",
      title: "فريق التوثيق",
      subtitle: "جمع القصص والصور",
      description: "يعمل الطلاب على جمع صور قديمة وقصص من العائلات وكبار السن في البلدة.",
      tag: "تراث",
    },
    {
      initial: "م",
      title: "فريق المقابلات",
      subtitle: "الاستماع إلى كبار السن",
      description: "يتعلم الطلاب كيف يطرحون الأسئلة، يوثقون الروايات، ويحفظون الذاكرة الشفوية.",
      tag: "مجتمع",
    },
    {
      initial: "ك",
      title: "فريق التكنولوجيا",
      subtitle: "بناء الموقع والمتحف الرقمي",
      description: "يتعرف الطلاب تدريجيًا على عالم البرمجة وبناء المواقع من خلال مشروع حقيقي.",
      tag: "تقنية",
    },
  ],
  ctaLabel: "المرحلة القادمة:",
  ctaText: "مسار لتعليم البرمجة وبناء المواقع داخل المدرسة",
};

export default function StudentImpact({ dict = defaultDict }: { dict?: ImpactDict }) {
  return (
    <section id="students" className="bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4">
            {dict.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
            {dict.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Team cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-6">
          {dict.teams.map((team, i) => {
            const style = TEAM_STYLES[i] ?? TEAM_STYLES[0];
            return (
              <div
                key={team.title}
                className="rounded-2xl border border-stone-100 bg-white shadow-sm hover:-translate-y-1 transition-transform duration-200 flex flex-col"
              >
                <div className={`h-1 rounded-t-2xl shrink-0 ${style.accentBg}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shrink-0 ${style.avatarBg} ${style.avatarText}`}
                  >
                    {team.initial}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-1">{team.title}</h3>
                  <p className="text-xs font-medium text-stone-400 mb-4">{team.subtitle}</p>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">{team.description}</p>
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${style.tagClass}`}>
                      {team.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl bg-stone-900 px-6 sm:px-8 py-5 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm shrink-0">
            ◈
          </div>
          <p className="text-sm text-stone-300 leading-snug">
            <span className="font-semibold text-white">{dict.ctaLabel}</span>{" "}
            {dict.ctaText}
          </p>
        </div>

      </div>
    </section>
  );
}
