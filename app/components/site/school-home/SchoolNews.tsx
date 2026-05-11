import Link from "next/link";

type NewsItem = {
  category: string;
  title: string;
  description: string;
  date: string;
};

const news: NewsItem[] = [
  {
    category: "مشاريع",
    title: "افتتاح مشروع حكاية أبو غوش",
    description:
      "أطلق طلاب المدرسة مشروع توثيق التراث المحلي، بهدف حفظ ذاكرة البلد وإتاحتها للأجيال القادمة عبر موقع تفاعلي.",
    date: "مايو ٢٠٢٦",
  },
  {
    category: "نشاطات",
    title: "طلاب المدرسة يجمعون قصصًا من كبار السن",
    description:
      "في إطار مشروع الذاكرة المجتمعية، أجرى الطلاب مقابلات مع أهل البلد لتوثيق حكاياتهم وصورهم القديمة.",
    date: "أبريل ٢٠٢٦",
  },
  {
    category: "متحف",
    title: "التحضير لمتحف مدرسي جديد",
    description:
      "تستعد المدرسة لافتتاح متحف مدرسي يعرض صور ووثائق وقصصًا من تاريخ أبو غوش، بمشاركة الطلاب والمجتمع.",
    date: "مارس ٢٠٢٦",
  },
];

export default function SchoolNews() {
  return (
    <section id="news" className="bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3">
              أخبار
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              أخبار المدرسة
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-150 flex items-center gap-1"
          >
            <span>عرض كل الأخبار</span>
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Category badge */}
              <span className="self-start text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full mb-4">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold text-stone-900 leading-snug mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-5">
                {item.description}
              </p>

              {/* Date */}
              <p className="text-xs text-stone-400 font-medium">{item.date}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
