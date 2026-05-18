export default function NewsFeatured() {
  return (
    <section className="bg-stone-50 pt-14 sm:pt-16 pb-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest text-stone-400 mb-6 uppercase">
          الخبر الرئيسي
        </p>

        {/* Featured card */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">

          {/* Image placeholder */}
          <div className="lg:w-2/5 shrink-0 bg-gradient-to-br from-amber-50 to-stone-200 min-h-56 lg:min-h-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-12 h-12 rounded-xl bg-white/60 mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📰</span>
              </div>
              <p className="text-xs text-stone-400">صورة الخبر</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                مشاريع الطلاب
              </span>
              <span className="text-xs text-stone-400">مايو 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug mb-4">
              إطلاق مشروع حكاية أبو غوش داخل المدرسة
            </h2>

            <p className="text-sm sm:text-base text-stone-500 leading-relaxed mb-8 max-w-lg">
              أطلق طلاب مدرسة أبو غوش الثانوية مشروعًا توثيقيًا رقميًا يهدف إلى حفظ ذاكرة المدينة
              وتراثها العريق، من خلال مقابلات ميدانية وأرشيف صور وخرائط تفاعلية.
            </p>

            <span className="inline-block self-start px-5 py-2.5 rounded-xl text-sm font-semibold bg-stone-100 text-stone-400 cursor-default select-none">
              قراءة المزيد
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
