import Link from "next/link";

type Status = "جاري" | "مكتمل";

interface Project {
  title: string;
  team: string;
  grade: string;
  description: string;
  category: string;
  categoryBg: string;
  categoryText: string;
  coverGradient: string;
  status: Status;
}

const projects: Project[] = [
  {
    title: "بحث في تاريخ أبو غوش العثماني",
    team: "فريق البحث التاريخي",
    grade: "الصف الحادي عشر",
    description:
      "دراسة وثائقية حول تاريخ قرية أبو غوش إبان الحقبة العثمانية، اعتمادًا على مصادر ومخطوطات نادرة من المكتبات والأرشيفات المحلية.",
    category: "بحث",
    categoryBg: "bg-amber-100",
    categoryText: "text-amber-700",
    coverGradient: "from-amber-50 to-amber-100",
    status: "مكتمل",
  },
  {
    title: "أرشيف رقمي لمباني أبو غوش القديمة",
    team: "فريق التوثيق المعماري",
    grade: "الصف العاشر",
    description:
      "توثيق فوتوغرافي ومعماري لأبرز المباني التاريخية في القرية، مع إنشاء قاعدة بيانات رقمية مرتبطة بالخريطة التفاعلية.",
    category: "توثيق",
    categoryBg: "bg-stone-100",
    categoryText: "text-stone-600",
    coverGradient: "from-stone-100 to-stone-200",
    status: "جاري",
  },
  {
    title: "مشروع الذاكرة الشفهية",
    team: "فريق المقابلات",
    grade: "الصف العاشر",
    description:
      "سلسلة مقابلات مع كبار السن من أهالي أبو غوش لتوثيق رواياتهم وحكاياتهم الشفهية وحفظها للأجيال القادمة.",
    category: "مقابلات",
    categoryBg: "bg-amber-50",
    categoryText: "text-amber-600",
    coverGradient: "from-amber-50 to-stone-100",
    status: "جاري",
  },
  {
    title: "عدسة على أبو غوش",
    team: "نادي التصوير المدرسي",
    grade: "الصف التاسع",
    description:
      "معرض صور فوتوغرافية يرصد جماليات الطبيعة والتراث والحياة اليومية في أبو غوش عبر عيون طلاب المدرسة.",
    category: "تصوير",
    categoryBg: "bg-stone-100",
    categoryText: "text-stone-500",
    coverGradient: "from-stone-50 to-amber-50",
    status: "مكتمل",
  },
  {
    title: "الخريطة التفاعلية للمواقع التراثية",
    team: "فريق التكنولوجيا",
    grade: "الصفان العاشر والحادي عشر",
    description:
      "تطوير خريطة رقمية تفاعلية تُبرز المواقع الأثرية والتراثية في القرية وما حولها، مع روابط للقصص والصور.",
    category: "تكنولوجيا",
    categoryBg: "bg-amber-100",
    categoryText: "text-amber-700",
    coverGradient: "from-amber-100 to-amber-50",
    status: "جاري",
  },
  {
    title: "الموروث الشعبي: الأغاني والأمثال",
    team: "فريق التراث اللامادي",
    grade: "الصف التاسع",
    description:
      "جمع وتوثيق الأغاني الشعبية والأمثال العامية المتداولة في أبو غوش وتصنيفها ضمن أرشيف رقمي منظّم.",
    category: "بحث",
    categoryBg: "bg-amber-100",
    categoryText: "text-amber-700",
    coverGradient: "from-stone-100 to-amber-100",
    status: "مكتمل",
  },
];

const statusStyles: Record<Status, string> = {
  "جاري": "bg-amber-100 text-amber-700",
  "مكتمل": "bg-stone-800 text-white",
};

export default function ProjectsGrid() {
  return (
    <>
      <section className="bg-stone-50 py-14 sm:py-16 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <p className="text-xs font-semibold tracking-widest text-stone-400 mb-8 uppercase">
            المشاريع
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Cover strip */}
                <div
                  className={`h-28 bg-gradient-to-br ${p.coverGradient} flex items-end p-4 shrink-0`}
                >
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.categoryBg} ${p.categoryText}`}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-stone-900 leading-snug mb-1 group-hover:text-amber-700 transition-colors duration-150">
                    {p.title}
                  </h3>
                  <p className="text-xs text-stone-400 mb-3">
                    {p.team} · {p.grade}
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                    <span className="text-xs text-stone-300">2025 – 2026</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-stone-50 pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-800 rounded-2xl px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-right max-w-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                شارك مشروعك مع المدرسة
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                سيتم تطوير منصة لعرض ومتابعة مشاريع الطلاب بشكل تفاعلي قريبًا.
              </p>
            </div>
            <Link
              href="/portal"
              className="shrink-0 px-7 py-3 rounded-xl text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-150 whitespace-nowrap"
            >
              العودة إلى البوابة الإلكترونية
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
