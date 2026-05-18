import Link from "next/link";

export default function SchoolPulse() {
  return (
    <section className="bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4">
            اليوم
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
            نبضة المدرسة اليوم
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-lg leading-relaxed">
            لحظات من داخل الحرم المدرسي — أصوات الطلاب، والأحداث القادمة، وإنجازات نفتخر بها.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Card 1: صوت الطلاب — warm editorial */}
          <div className="rounded-2xl overflow-hidden border border-amber-100 flex flex-col">
            {/* Amber accent strip */}
            <div className="h-1.5 bg-amber-400 shrink-0" />
            <div className="bg-amber-50 p-6 sm:p-7 flex flex-col flex-1">
              {/* Decorative quote mark */}
              <div
                className="text-5xl leading-none text-amber-300/60 mb-4 select-none font-serif"
                aria-hidden="true"
              >
                &quot;
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-800 mb-3">
                صوت الطلاب
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">
                يشارك طلاب المدرسة في توثيق ذاكرة البلد وتصوير الحياة اليومية وإجراء مقابلات مع كبار السن — إبداع حقيقي ينبع من المجتمع.
              </p>
              <Link
                href="/heritage"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-150"
              >
                <span>اقرأ القصص</span>
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Card 2: حدث قادم — clean elevated white */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-stone-100 flex flex-col">
            {/* Top row: icon + badge */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl shrink-0">
                📅
              </div>
              <span className="text-xs font-semibold text-stone-400 bg-stone-100 px-3 py-1 rounded-full mt-1">
                قريبًا
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-3">
              حدث قادم
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed flex-1">
              يستعد الطلاب لإطلاق الموسم الثاني من مشروع الذاكرة المجتمعية، بمشاركة أهالي البلد والخريجين.
            </p>
            {/* Bottom status */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
              <p className="text-xs text-stone-400">التاريخ سيُعلن قريبًا</p>
            </div>
          </div>

          {/* Card 3: إنجاز الأسبوع — dark featured */}
          <div className="bg-stone-900 rounded-2xl p-6 sm:p-7 flex flex-col">
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-xl mb-5 shrink-0">
              🏆
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">
              إنجاز الأسبوع
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed flex-1">
              طلاب مدرسة أبو غوش يفوزون بجائزة التوثيق الرقمي في مسابقة التراث المحلي — إنجاز يعكس روح الفريق والانتماء للمجتمع.
            </p>
            {/* Bottom badge */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                إنجاز
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
