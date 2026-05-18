import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  href: string;
}

interface Section {
  heading: string;
  cols: string;
  resources: Resource[];
}

const sections: Section[] = [
  {
    heading: "التعليم والمنصات",
    cols: "sm:grid-cols-2 lg:grid-cols-4",
    resources: [
      {
        title: "Google Classroom",
        description: "بيئة التعلم الرقمية لمتابعة الواجبات والمواد الدراسية.",
        icon: "🎓",
        iconBg: "bg-amber-50",
        href: "#",
      },
      {
        title: "Google Drive",
        description: "تخزين الملفات ومشاركتها مع المعلمين والزملاء بسهولة.",
        icon: "📁",
        iconBg: "bg-stone-100",
        href: "#",
      },
      {
        title: "Canva",
        description: "أداة تصميم بصري سهلة الاستخدام للعروض والمشاريع.",
        icon: "🎨",
        iconBg: "bg-amber-100",
        href: "#",
      },
      {
        title: "YouTube Learning",
        description: "مقاطع تعليمية في مختلف المجالات والتخصصات.",
        icon: "📺",
        iconBg: "bg-stone-50",
        href: "#",
      },
    ],
  },
  {
    heading: "البرمجة والتكنولوجيا",
    cols: "sm:grid-cols-2 lg:grid-cols-4",
    resources: [
      {
        title: "Visual Studio Code",
        description: "محرر أكواد احترافي ومجاني لتطوير البرمجيات.",
        icon: "💻",
        iconBg: "bg-stone-100",
        href: "#",
      },
      {
        title: "GitHub",
        description: "منصة لحفظ المشاريع البرمجية والتعاون عليها مع الفريق.",
        icon: "🔗",
        iconBg: "bg-stone-200",
        href: "#",
      },
      {
        title: "Scratch",
        description: "بيئة برمجة مرئية مثالية للمبتدئين وتعلم أساسيات التفكير البرمجي.",
        icon: "🐱",
        iconBg: "bg-amber-50",
        href: "#",
      },
      {
        title: "Khan Academy",
        description: "دروس مجانية في الرياضيات والعلوم والبرمجة وغيرها.",
        icon: "📚",
        iconBg: "bg-amber-100",
        href: "#",
      },
    ],
  },
  {
    heading: "التصوير والتوثيق",
    cols: "sm:grid-cols-3",
    resources: [
      {
        title: "CapCut",
        description: "أداة مونتاج فيديو سهلة ومجانية مناسبة لمشاريع التوثيق.",
        icon: "🎬",
        iconBg: "bg-stone-100",
        href: "#",
      },
      {
        title: "Canva Design",
        description: "قوالب جاهزة لتصميم المعارض، الملصقات، والتقارير البصرية.",
        icon: "✏️",
        iconBg: "bg-amber-50",
        href: "#",
      },
      {
        title: "Google Photos",
        description: "تنظيم الصور وأرشفتها بشكل آلي مع إمكانية المشاركة السريعة.",
        icon: "🖼️",
        iconBg: "bg-stone-50",
        href: "#",
      },
    ],
  },
  {
    heading: "الذكاء الاصطناعي",
    cols: "sm:grid-cols-3",
    resources: [
      {
        title: "ChatGPT",
        description: "مساعد ذكاء اصطناعي للكتابة، البحث، وصياغة الأفكار.",
        icon: "🤖",
        iconBg: "bg-amber-100",
        href: "#",
      },
      {
        title: "Claude",
        description: "مساعد ذكاء اصطناعي متقدم للتحليل والكتابة والحوار.",
        icon: "✨",
        iconBg: "bg-stone-800",
        href: "#",
      },
      {
        title: "NotebookLM",
        description: "أداة من Google لتحليل الوثائق وتلخيص المصادر البحثية.",
        icon: "📓",
        iconBg: "bg-stone-100",
        href: "#",
      },
    ],
  },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{title}</h2>
      <div className="mt-2.5 w-10 h-0.5 bg-amber-500 rounded-full" />
    </div>
  );
}

export default function ResourcesSections() {
  return (
    <>
      <div className="bg-stone-50">
        {sections.map((section, i) => (
          <section
            key={section.heading}
            className={`py-12 sm:py-14 ${i !== 0 ? "border-t border-stone-200/50" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <SectionHeading title={section.heading} />
              <div className={`grid grid-cols-1 ${section.cols} gap-5 sm:gap-6`}>
                {section.resources.map((r) => (
                  <div
                    key={r.title}
                    className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex flex-col gap-4"
                  >
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl ${r.iconBg} flex items-center justify-center text-xl shrink-0`}
                    >
                      {r.icon}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1.5 flex-1">
                      <h3 className="text-sm font-bold text-stone-900 leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        {r.description}
                      </p>
                    </div>

                    {/* Button */}
                    <a
                      href={r.href}
                      className="inline-block self-start mt-1 px-4 py-1.5 rounded-lg text-xs font-semibold border border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors duration-150"
                    >
                      زيارة المنصة ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA strip */}
      <section className="bg-stone-50 pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-800 rounded-2xl px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-right max-w-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                التعلم المستمر
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                نسعى إلى توفير أدوات حديثة تساعد الطلاب على التعلم والإبداع.
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
