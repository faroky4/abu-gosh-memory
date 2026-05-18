import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface ResourceDict {
  description: string;
}

interface SectionDict {
  heading: string;
  resources: ResourceDict[];
}

interface ResourcesSectionsDict {
  visitLabel: string;
  sections: SectionDict[];
  cta: { title: string; text: string; button: string };
}

interface ResourceConfig {
  title: string;
  icon: string;
  iconBg: string;
  href: string;
}

interface SectionConfig {
  cols: string;
  resources: ResourceConfig[];
}

const SECTION_CONFIGS: SectionConfig[] = [
  {
    cols: "sm:grid-cols-2 lg:grid-cols-4",
    resources: [
      { title: "Google Classroom", icon: "🎓", iconBg: "bg-amber-50",   href: "#" },
      { title: "Google Drive",     icon: "📁", iconBg: "bg-stone-100",  href: "#" },
      { title: "Canva",            icon: "🎨", iconBg: "bg-amber-100",  href: "#" },
      { title: "YouTube Learning", icon: "📺", iconBg: "bg-stone-50",   href: "#" },
    ],
  },
  {
    cols: "sm:grid-cols-2 lg:grid-cols-4",
    resources: [
      { title: "Visual Studio Code", icon: "💻", iconBg: "bg-stone-100", href: "#" },
      { title: "GitHub",             icon: "🔗", iconBg: "bg-stone-200", href: "#" },
      { title: "Scratch",            icon: "🐱", iconBg: "bg-amber-50",  href: "#" },
      { title: "Khan Academy",       icon: "📚", iconBg: "bg-amber-100", href: "#" },
    ],
  },
  {
    cols: "sm:grid-cols-3",
    resources: [
      { title: "CapCut",         icon: "🎬", iconBg: "bg-stone-100", href: "#" },
      { title: "Canva Design",   icon: "✏️", iconBg: "bg-amber-50",  href: "#" },
      { title: "Google Photos",  icon: "🖼️", iconBg: "bg-stone-50",  href: "#" },
    ],
  },
  {
    cols: "sm:grid-cols-3",
    resources: [
      { title: "ChatGPT",    icon: "🤖", iconBg: "bg-amber-100", href: "#" },
      { title: "Claude",     icon: "✨", iconBg: "bg-stone-800",  href: "#" },
      { title: "NotebookLM", icon: "📓", iconBg: "bg-stone-100", href: "#" },
    ],
  },
];

const defaultDict: ResourcesSectionsDict = {
  visitLabel: "زيارة المنصة ↗",
  sections: [
    {
      heading: "التعليم والمنصات",
      resources: [
        { description: "بيئة التعلم الرقمية لمتابعة الواجبات والمواد الدراسية." },
        { description: "تخزين الملفات ومشاركتها مع المعلمين والزملاء بسهولة." },
        { description: "أداة تصميم بصري سهلة الاستخدام للعروض والمشاريع." },
        { description: "مقاطع تعليمية في مختلف المجالات والتخصصات." },
      ],
    },
    {
      heading: "البرمجة والتكنولوجيا",
      resources: [
        { description: "محرر أكواد احترافي ومجاني لتطوير البرمجيات." },
        { description: "منصة لحفظ المشاريع البرمجية والتعاون عليها مع الفريق." },
        { description: "بيئة برمجة مرئية مثالية للمبتدئين وتعلم أساسيات التفكير البرمجي." },
        { description: "دروس مجانية في الرياضيات والعلوم والبرمجة وغيرها." },
      ],
    },
    {
      heading: "التصوير والتوثيق",
      resources: [
        { description: "أداة مونتاج فيديو سهلة ومجانية مناسبة لمشاريع التوثيق." },
        { description: "قوالب جاهزة لتصميم المعارض، الملصقات، والتقارير البصرية." },
        { description: "تنظيم الصور وأرشفتها بشكل آلي مع إمكانية المشاركة السريعة." },
      ],
    },
    {
      heading: "الذكاء الاصطناعي",
      resources: [
        { description: "مساعد ذكاء اصطناعي للكتابة، البحث، وصياغة الأفكار." },
        { description: "مساعد ذكاء اصطناعي متقدم للتحليل والكتابة والحوار." },
        { description: "أداة من Google لتحليل الوثائق وتلخيص المصادر البحثية." },
      ],
    },
  ],
  cta: {
    title: "التعلم المستمر",
    text: "نسعى إلى توفير أدوات حديثة تساعد الطلاب على التعلم والإبداع.",
    button: "العودة إلى البوابة الإلكترونية",
  },
};

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{title}</h2>
      <div className="mt-2.5 w-10 h-0.5 bg-amber-500 rounded-full" />
    </div>
  );
}

export default function ResourcesSections({
  dict = defaultDict,
  lang,
}: {
  dict?: ResourcesSectionsDict;
  lang?: Locale;
}) {
  const portalHref = lang ? `/${lang}/portal` : "/portal";

  return (
    <>
      <div className="bg-stone-50">
        {SECTION_CONFIGS.map((section, i) => {
          const sectionDict = dict.sections[i];
          return (
            <section
              key={i}
              className={`py-12 sm:py-14 ${i !== 0 ? "border-t border-stone-200/50" : ""}`}
            >
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading title={sectionDict.heading} />
                <div className={`grid grid-cols-1 ${section.cols} gap-5 sm:gap-6`}>
                  {section.resources.map((r, j) => {
                    const rDict = sectionDict.resources[j];
                    return (
                      <div
                        key={r.title}
                        className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex flex-col gap-4"
                      >
                        <div
                          className={`w-11 h-11 rounded-xl ${r.iconBg} flex items-center justify-center text-xl shrink-0`}
                        >
                          {r.icon}
                        </div>

                        <div className="flex flex-col gap-1.5 flex-1">
                          <h3 className="text-sm font-bold text-stone-900 leading-snug">
                            {r.title}
                          </h3>
                          <p className="text-xs text-stone-500 leading-relaxed">
                            {rDict.description}
                          </p>
                        </div>

                        <a
                          href={r.href}
                          className="inline-block self-start mt-1 px-4 py-1.5 rounded-lg text-xs font-semibold border border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors duration-150"
                        >
                          {dict.visitLabel}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA strip */}
      <section className="bg-stone-50 pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-800 rounded-2xl px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-right max-w-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {dict.cta.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {dict.cta.text}
              </p>
            </div>
            <Link
              href={portalHref}
              className="shrink-0 px-7 py-3 rounded-xl text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-150 whitespace-nowrap"
            >
              {dict.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
