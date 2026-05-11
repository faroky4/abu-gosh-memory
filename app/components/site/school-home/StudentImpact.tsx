const tracks = [
  {
    icon: "🔍",
    title: "البحث والتوثيق",
    description:
      "يبحث الطلاب في الأرشيفات العائلية ويوثّقون الصور والوثائق التاريخية لأبو غوش.",
  },
  {
    icon: "🎙️",
    title: "المقابلات المجتمعية",
    description:
      "يجري الطلاب مقابلات مع كبار السن لتسجيل حكاياتهم وذكرياتهم قبل أن تُنسى.",
  },
  {
    icon: "📷",
    title: "التصوير والإعلام",
    description:
      "يلتقط الطلاب صور الحياة اليومية ويوثّقون التغيير بين الماضي والحاضر.",
  },
  {
    icon: "💻",
    title: "التكنولوجيا وبناء الموقع",
    description:
      "يساهم الطلاب في بناء هذا الموقع وتطويره، مكتسبين مهارات برمجية حقيقية.",
  },
];

export default function StudentImpact() {
  return (
    <section id="students" className="bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3">
            الطلاب
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            الطلاب يصنعون الفرق
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
            لا يقتصر دور الطالب على تلقّي المعرفة — بل يساهم بشكل مباشر في
            حفظ ذاكرة مجتمعه، من جمع القصص إلى بناء الأدوات الرقمية التي تحكيها.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl mb-4">
                {track.icon}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-200 flex items-center justify-center text-xl shrink-0">
              💡
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                مسار جديد لتعلم البرمجة
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                نسعى مستقبلًا إلى تحويل المشروع إلى مساحة يتعلم فيها الطلاب
                أساسيات البرمجة وبناء المواقع من خلال تطبيق عملي حقيقي.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
