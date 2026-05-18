import Link from "next/link";

const articles = [
  {
    title: "الطلاب يجرون مقابلات مع كبار السن",
    date: "مارس 2026",
    excerpt:
      "طلاب الصف العاشر يوثّقون ذاكرة أبو غوش من خلال مقابلات ميدانية مع أبناء المجتمع وحفظ رواياتهم الشفهية.",
    imageBg: "from-amber-50 to-amber-100",
  },
  {
    title: "التحضير للمتحف المدرسي",
    date: "فبراير 2026",
    excerpt:
      "تنطلق أعمال تصميم المتحف الرقمي داخل المدرسة بمشاركة فرق طلابية متعددة تحت إشراف الكادر التعليمي.",
    imageBg: "from-stone-100 to-stone-200",
  },
  {
    title: "ورشة تصوير وتوثيق",
    date: "يناير 2026",
    excerpt:
      "ورشة عملية لتعليم الطلاب أساسيات التصوير والتوثيق الميداني في خدمة مشاريع الأرشيف والتراث.",
    imageBg: "from-amber-100/60 to-stone-100",
  },
  {
    title: "فعالية مجتمعية في المدرسة",
    date: "ديسمبر 2025",
    excerpt:
      "حفل تكريم وعرض نتائج مشاريع الطلاب بحضور أهالي أبو غوش والمدرسين وأبناء المجتمع.",
    imageBg: "from-stone-50 to-amber-50",
  },
];

export default function NewsGrid() {
  return (
    <>
      {/* Secondary articles */}
      <section className="bg-stone-50 py-10 sm:py-12 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold tracking-widest text-stone-400 mb-6 uppercase">
            أخبار أخرى
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {articles.map((a) => (
              <div
                key={a.title}
                className="group bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col"
              >
                {/* Image placeholder */}
                <div
                  className={`h-40 bg-gradient-to-br ${a.imageBg} flex items-center justify-center shrink-0`}
                >
                  <p className="text-xs text-stone-300">صورة الخبر</p>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-stone-400 mb-2">{a.date}</p>
                  <h3 className="text-base font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors duration-150">
                    {a.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">{a.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-50 pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-800 rounded-2xl px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-right max-w-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                تابع آخر أخبار المدرسة
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                سيتم تطوير نظام أخبار وتحديثات متكامل قريبًا.
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
