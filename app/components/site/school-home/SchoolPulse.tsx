import Link from "next/link";

interface PulseDict {
  badge: string;
  title: string;
  subtitle: string;
  card1: { title: string; text: string; linkLabel: string };
  card2: { badge: string; title: string; text: string; status: string };
  card3: { title: string; text: string; badge: string };
}

const defaultDict: PulseDict = {
  badge: "اليوم",
  title: "نبضة المدرسة اليوم",
  subtitle: "لحظات من داخل الحرم المدرسي — أصوات الطلاب، والأحداث القادمة، وإنجازات نفتخر بها.",
  card1: {
    title: "صوت الطلاب",
    text: "يشارك طلاب المدرسة في توثيق ذاكرة البلد وتصوير الحياة اليومية وإجراء مقابلات مع كبار السن — إبداع حقيقي ينبع من المجتمع.",
    linkLabel: "اقرأ القصص",
  },
  card2: {
    badge: "قريبًا",
    title: "حدث قادم",
    text: "يستعد الطلاب لإطلاق الموسم الثاني من مشروع الذاكرة المجتمعية، بمشاركة أهالي البلد والخريجين.",
    status: "التاريخ سيُعلن قريبًا",
  },
  card3: {
    title: "إنجاز الأسبوع",
    text: "طلاب مدرسة أبو غوش يفوزون بجائزة التوثيق الرقمي في مسابقة التراث المحلي — إنجاز يعكس روح الفريق والانتماء للمجتمع.",
    badge: "إنجاز",
  },
};

export default function SchoolPulse({
  dict = defaultDict,
  lang,
}: {
  dict?: PulseDict;
  lang?: string;
}) {
  return (
    <section className="bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4">
            {dict.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
            {dict.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-lg leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Card 1: student voice */}
          <div className="rounded-2xl overflow-hidden border border-amber-100 flex flex-col">
            <div className="h-1.5 bg-amber-400 shrink-0" />
            <div className="bg-amber-50 p-6 sm:p-7 flex flex-col flex-1">
              <div
                className="text-5xl leading-none text-amber-300/60 mb-4 select-none font-serif"
                aria-hidden="true"
              >
                &quot;
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-800 mb-3">
                {dict.card1.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">
                {dict.card1.text}
              </p>
              <Link
                href={lang ? `/${lang}/heritage` : "/heritage"}
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors duration-150"
              >
                <span>{dict.card1.linkLabel}</span>
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Card 2: upcoming event */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-stone-100 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl shrink-0">
                📅
              </div>
              <span className="text-xs font-semibold text-stone-400 bg-stone-100 px-3 py-1 rounded-full mt-1">
                {dict.card2.badge}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-3">
              {dict.card2.title}
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed flex-1">
              {dict.card2.text}
            </p>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
              <p className="text-xs text-stone-400">{dict.card2.status}</p>
            </div>
          </div>

          {/* Card 3: achievement */}
          <div className="bg-stone-900 rounded-2xl p-6 sm:p-7 flex flex-col">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-xl mb-5 shrink-0">
              🏆
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">
              {dict.card3.title}
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed flex-1">
              {dict.card3.text}
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                {dict.card3.badge}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
