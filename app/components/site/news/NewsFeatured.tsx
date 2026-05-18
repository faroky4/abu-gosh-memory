interface FeaturedDict {
  sectionLabel: string;
  imagePlaceholder: string;
  categoryBadge: string;
  date: string;
  title: string;
  excerpt: string;
  readMoreLabel: string;
}

const defaultDict: FeaturedDict = {
  sectionLabel: "الخبر الرئيسي",
  imagePlaceholder: "صورة الخبر",
  categoryBadge: "مشاريع الطلاب",
  date: "مايو 2026",
  title: "إطلاق مشروع حكاية أبو غوش داخل المدرسة",
  excerpt:
    "أطلق طلاب مدرسة أبو غوش الثانوية مشروعًا توثيقيًا رقميًا يهدف إلى حفظ ذاكرة المدينة وتراثها العريق، من خلال مقابلات ميدانية وأرشيف صور وخرائط تفاعلية.",
  readMoreLabel: "قراءة المزيد",
};

export default function NewsFeatured({ dict = defaultDict }: { dict?: FeaturedDict }) {
  return (
    <section className="bg-stone-50 pt-14 sm:pt-16 pb-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <p className="text-xs font-semibold tracking-widest text-stone-400 mb-6 uppercase">
          {dict.sectionLabel}
        </p>

        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">

          <div className="lg:w-2/5 shrink-0 bg-gradient-to-br from-amber-50 to-stone-200 min-h-56 lg:min-h-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-12 h-12 rounded-xl bg-white/60 mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📰</span>
              </div>
              <p className="text-xs text-stone-400">{dict.imagePlaceholder}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                {dict.categoryBadge}
              </span>
              <span className="text-xs text-stone-400">{dict.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug mb-4">
              {dict.title}
            </h2>

            <p className="text-sm sm:text-base text-stone-500 leading-relaxed mb-8 max-w-lg">
              {dict.excerpt}
            </p>

            <span className="inline-block self-start px-5 py-2.5 rounded-xl text-sm font-semibold bg-stone-100 text-stone-400 cursor-default select-none">
              {dict.readMoreLabel}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
